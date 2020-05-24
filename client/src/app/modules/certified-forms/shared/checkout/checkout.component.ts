import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserService, CheckoutService, Form, CommonsService, FormService, ConvertService } from '../../../../core';
import { Router } from '@angular/router';
import * as braintree from 'braintree-web';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
declare let paypal: any;
declare let Stripe: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  @Input() form: Form;
  @Output() formPaid: EventEmitter<any> = new EventEmitter();
  @Output() exitModal: EventEmitter<any> = new EventEmitter();
  @Output() downloadPdfOutput: EventEmitter<any> = new EventEmitter();
  @Output() downloadWordOutput: EventEmitter<any> = new EventEmitter();
  @ViewChild('emailInput', { static: false }) emailInput: ElementRef;
  @ViewChild('conditions', { static: false }) conditions: ElementRef;
  @ViewChild('cardField', { static: false }) cardField: ElementRef;
  public currentStep = 0;
  public email: string;
  public loadingPayment = true;
  public clientToken: string;
  public hostedFieldsInstance: braintree.HostedFields;
  public cardholdersName: string;
  public transactionId: string;
  public conditionsChecked: any;
  public idsOfFields: Array<string> = ['card-element', 'expirationDate', 'cvv'];
  public paymentMethod = 'card';
  public stripe: any;
  public clientSecret: string;
  public cardNumber: any;
  public cardExpiry: any;
  public cardCvc: any;
  public paypalButtonCreated = false;
  public steps = [
    {
      type: 'cart',
      stepNum: 0
    },
    {
      type: 'login',
      stepNum: 1
    },
    {
      type: 'payment',
      stepNum: 2
    },
    {
      type: 'finish',
      stepNum: 3
    },
  ];

  constructor(
    private userService: UserService,
    private checkoutService: CheckoutService,
    private formService: FormService,
    private commonsService: CommonsService,
    private convertService: ConvertService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.email = this.userService.getCurrentUser().email;
        } else {
          this.email = '';
        }
      }
    );
    if (this.form.fields[this.form.fields.length - 1]) {
      this.currentStep = this.form.fields[this.form.fields.length - 1]['checkoutProcess'].phase;
      if (this.steps[this.currentStep].type === 'payment') {
        this.currentStep = this.currentStep - 1;
      }
    }
    if (this.commonsService.isBrowser()) {
      this.stripe = Stripe(environment.stripe_key);
    }
  }

  moveStep(type: string) {
    if (type === 'next') {
      if (this.validateBeforeNextStep()) {
        this.currentStep += 1;
      }
    } else if (type === 'previous') {
      this.currentStep -= 1;
    }
    this.form.fields[this.form.fields.length - 1]['checkoutProcess'].phase = this.currentStep;
    this.paymentProcess();
  }

  validateBeforeNextStep() {
    const step = this.steps[this.currentStep];
    if (step.type === 'login') {
      if (this.email === '') {
        this.emailInput.nativeElement.style.borderBottom = '3px solid red';
        this.toastr.error('Email no puede estar vacío', 'Email vacío', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        return false;
      }
      if (!this.conditions.nativeElement.checked) {
        this.toastr.error('Debe aceptar las condiciones de venta', 'Aceptar', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        return false;
      }
    }
    return true;
  }

  goToAuth() {
    if (window.sessionStorage) {
      window.sessionStorage[this.form.title] = JSON.stringify(this.form);
      this.router.navigate(['/auth/login'], {
        queryParams: {
          formPath: this.router.url.substring(this.router.url.lastIndexOf('/') + 1)
        }
      });
    }
  }

  onSubmit() {
    // this.tokenizeUserDetails();
    this.payWithCard();
  }

  onPaymentMethodSelected(method: string) {
    this.paymentMethod = method;
    if (this.paymentMethod === 'card') {
      this.paymentProcess();
    } else if (this.paymentMethod === 'paypal') {
      this.createPaypalButton();
    }
  }

  paymentProcess() {
    if (this.steps[this.currentStep].type === 'payment') {
      this.commonsService.toggleSpinner();
      this.loadingPayment = false;
      this.checkoutService.getToken(this.form.id).subscribe((token: any) => {
        this.commonsService.toggleSpinner();
        this.clientSecret = token.clientSecret;
        const elements = this.stripe.elements();
        const style = {
          base: {
            fontSize: '16px',
            fontFamily: 'Lato',
            fontWeight: '300',
            color: 'rgba(46, 46, 46, 0.8)',
            '::placeholder': {
              transition: 'transition: 100ms linear',
              fontWeight: '300',
              fontFamily: 'Lato',
              color: '#4ECDC4'
            },
            ':focus': {
              borderColor: '#77db77',
              borderBottom: '3px solid #77db77'
            },
            'input:focus': {
              'border-color': '#77db77',
              'border-bottom': '3px solid #77db77'
            },
          },
          invalid: {
            fontFamily: 'Arial, sans-serif',
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        };
        this.cardNumber = elements.create('cardNumber', { style });
        this.cardExpiry = elements.create('cardExpiry', { style });
        this.cardCvc = elements.create('cardCvc', { style });
        // Stripe injects an iframe into the DOM
        this.cardNumber.mount('#card-element');
        this.cardExpiry.mount('#expirationDate');
        this.cardCvc.mount('#cvv');
        [this.cardNumber, this.cardExpiry, this.cardCvc].forEach((input, index) => {
          const elementContainer = document.getElementById(this.idsOfFields[index]);
          const toggleFocusClass = () => {
            elementContainer.classList.toggle('braintree-hosted-fields-focused');
          };
          input.on('focus', toggleFocusClass);
          input.on('blur', toggleFocusClass);
          input.on('change', (event) => {
            if (event.error) {
              elementContainer.classList.add('hosted-fields-invalid');
              elementContainer.nextElementSibling['hidden'] = false;
            } else {
              elementContainer.classList.remove('hosted-fields-invalid');
              elementContainer.nextElementSibling['hidden'] = true;
            }
          });
        });

      });
    } else {
      this.loadingPayment = true;
    }
  }

  payWithCard() {
    this.commonsService.toggleSpinner();
    this.stripe
      .confirmCardPayment(this.clientSecret, {
        payment_method: {
          card: this.cardNumber,
          billing_details: {
            name: this.cardholdersName,
          },
        }
      }).then((result) => {
        this.commonsService.toggleSpinner();
        if (result.error) {
          this.toastr.error(result.error.message, 'Error en el pago', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        } else {
          // The payment succeeded!
          // orderComplete(result.paymentIntent.id);
          this.checkoutService.pay(
            JSON.stringify(this.form.fields),
            this.email,
            result.paymentIntent.id,
            this.form.id,
            this.paymentMethod).subscribe(
              data => {
                if (data.transaction) {
                  this.moveStep('next');
                  this.onPaymentCompleted(data.transaction.transactionId);
                  this.toastr.success('Pago completado', 'Finalizado', {
                    positionClass: 'toast-bottom-right',
                    progressBar: true,
                    progressAnimation: 'decreasing'
                  });
                } else {
                  this.commonsService.toggleSpinner();
                }
              });
        }
      });
  }

  onPaymentCompleted(transactionId: string) {
    this.transactionId = transactionId;
    this.formService.getPaidCertifiedForm(transactionId).subscribe(
      data => {
        data.certifiedForm['transactionId'] = transactionId;
        this.formPaid.emit(data.certifiedForm);
      });
  }

  createPaypalButton() {
    this.commonsService.toggleSpinner();
    this.checkoutService
      .getPaypalOrder(this.form.id).subscribe(
        data => {
          this.paypalButton(data.orderID);
        });
  }

  paypalButton(orderId: any) {
    paypal.Buttons({
      style: {
        layout: 'horizontal',
        size: 'large',
        shape: 'pill',
        tagline: true
      },
      createOrder: () => {

        return orderId;
      },
      onApprove: async (data, actions) => {
        this.commonsService.toggleSpinner();
        const order = await actions.order.capture();
        this.checkoutService.pay(
          JSON.stringify(this.form.fields),
          this.email,
          order.id,
          this.form.id,
          this.paymentMethod).subscribe(
            datados => {
              if (datados.transaction) {
                this.moveStep('next');
                this.onPaymentCompleted(datados.transaction.transactionId);
                this.toastr.success('Pago completado', 'Finalizado', {
                  positionClass: 'toast-bottom-right',
                  progressBar: true,
                  progressAnimation: 'decreasing'
                });
                this.commonsService.toggleSpinner();
              } else {
                this.commonsService.toggleSpinner();
              }
            });
      },
      onError: err => {
        console.log(err);
      }
    }).render(document.getElementById('paypal-button'));
    setTimeout(() => {
      this.commonsService.toggleSpinner();
    }, 2000);
  }

  downloadWord() {
    this.downloadWordOutput.emit();
  }

  downloadPdf() {
    this.downloadPdfOutput.emit();
  }

}
