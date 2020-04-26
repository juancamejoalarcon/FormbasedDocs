import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserService, CheckoutService, Form, CommonsService, FormService, ConvertService } from '../../../../core';
import { Router } from '@angular/router';
import * as braintree from 'braintree-web';
import { ToastrService } from 'ngx-toastr';
declare let paypal: any;

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
  @ViewChild('emailInput', {static: false}) emailInput: ElementRef;
  @ViewChild('conditions', {static: false}) conditions: ElementRef;
  public currentStep = 0;
  public email: string;
  public loadingPayment = true;
  public clientToken: string;
  public hostedFieldsInstance: braintree.HostedFields;
  public cardholdersName: string;
  public transactionId: string;
  public conditionsChecked: any;
  public idsOfFields: Array<string> = ['number', 'cvv', 'expirationDate'];
  public paymentMethod = 'card';
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
  ) {}

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
    this.tokenizeUserDetails();
  }

  onPaymentMethodSelected(method: string) {
    this.paymentMethod = method;
    this.paymentProcess();
  }

  paymentProcess() {
    if (this.steps[this.currentStep].type === 'payment') {
      this.commonsService.toggleSpinner();
      this.checkoutService.getToken(this.paymentMethod).subscribe((token: string) => {
        this.loadingPayment = false;
        this.clientToken = token;
        this.createBraintreeUI(token);
      });
    } else {
      this.loadingPayment = true;
    }
  }

  tokenizeUserDetails() {
    this.commonsService.toggleSpinner();
    this.hostedFieldsInstance.tokenize({cardholderName: this.cardholdersName}).then((payload) => {
      // submit payload.nonce to the server from here
      this.checkoutService.pay(JSON.stringify(this.form.fields), this.email, payload.nonce, this.form.id, this.paymentMethod).subscribe(
        data => {
          if (data.transaction) {
            this.commonsService.toggleSpinner();
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

    }).catch((error) => {
      this.commonsService.toggleSpinner();
      this.toastr.error('Ha ocurrido un error, inténtelo de nuevo', 'Error en el pago', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      console.log(error);
      if (error.code === 'HOSTED_FIELDS_FIELDS_INVALID') {
        this.idsOfFields.forEach((id) =>  {
          if (error.details.invalidFieldKeys.includes(id)) {
            const el = document.getElementById(id);
            el.classList.add('hosted-fields-invalid');
            el.nextElementSibling['hidden'] = false;
          } else {
            const el = document.getElementById(id);
            el.classList.remove('hosted-fields-invalid');
            el.nextElementSibling['hidden'] = true;
          }
        });
      } else if (error.code === 'HOSTED_FIELDS_FIELDS_EMPTY') {
        this.idsOfFields.forEach((id) =>  {
          const el = document.getElementById(id);
          el.classList.add('hosted-fields-invalid');
          el.nextElementSibling['hidden'] = false;
        });
      }
    });
  }

  createBraintreeUI(TOKEN: any) {

    if (this.paymentMethod === 'card') {
      // CARD METHOD
      braintree.client.create({
        authorization: TOKEN
      }).then((clientInstance) => {
        braintree.hostedFields.create({
          client: clientInstance,
          styles: {
            // Override styles for the hosted fields
            input: {
              'font-size': '16px',
              'padding': '0.5rem 0.25rem 0.5rem',
              'font-family': 'Lato',
              'font-weight': '300',
              color: 'rgba(46, 46, 46, 0.8)'
            },
            '::placeholder': {
              'transition': 'transition: 100ms linear',
              'font-weight': '300',
              'font-family': 'Lato',
              color: '#4ECDC4'
            },
            ':focus': {
              'border-color': '#77db77',
              'border-bottom': '3px solid #77db77'
            },
            'input:focus': {
              'border-color': '#77db77',
              'border-bottom': '3px solid #77db77'
            },
          },

          // The hosted fields that we will be using
          // NOTE : cardholder's name field is not available in the field options
          // and a separate input field has to be used incase you need it
          fields: {
            number: {
              selector: '#' + this.idsOfFields[0],
              placeholder: '1234 5678 9101 1213'
            },
            cvv: {
              selector: '#' + this.idsOfFields[1],
              placeholder: '111'
            },
            expirationDate: {
              selector: '#' + this.idsOfFields[2],
              placeholder: '02/20'
            }
          }
        }).then((hostedFieldsInstance) => {

          this.hostedFieldsInstance = hostedFieldsInstance;
          const fields = hostedFieldsInstance.getState().fields;
          const isValid = Object.keys(fields).every(function (field) {
            return fields[field].isValid;
          });
          this.commonsService.toggleSpinner();
        });
      });
    } else if (this.paymentMethod === 'paypal') {
       // PAYPAL METHOD
        this.commonsService.toggleSpinner();
        paypal.Button.render({
          braintree: braintree,
          env: 'sandbox',
          client: {
            sandbox: TOKEN,
          },
          style: {
            size: 'medium'
          },
          payment: (data: any, actions: any) => {
            this.commonsService.toggleSpinner();
            return actions.payment.create({
              payment: {
                transactions: [{
                  amount: {
                    total: this.form.amount,
                    currency: 'EUR'
                  }
                }]
              }
            });
          },
          onAuthorize: (data: any, actions: any) => {
            this.commonsService.toggleSpinner();
            return actions.payment.tokenize()
              .then( (payload: any) => {
                this.commonsService.toggleSpinner();
                this.checkoutService.pay(
                  JSON.stringify(this.form.fields),
                  this.email,
                  payload.nonce,
                  this.form.id,
                  this.paymentMethod)
                  .subscribe(result => {
                    this.commonsService.toggleSpinner();
                    this.moveStep('next');
                    this.onPaymentCompleted(result.transaction.transactionId);
                    this.toastr.success('Pago completado', 'Finalizado', {
                      positionClass: 'toast-bottom-right',
                      progressBar: true,
                      progressAnimation: 'decreasing'
                    });
                });
              });
          },
          onCancel: function (data: any) {
            console.log('checkout.js payment cancelled', JSON.stringify(data));
          },
          onError: function (error: any) {
            this.commonsService.toggleSpinner();
            this.toastr.error('Paypal error', error, {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing'
            });
          }
        }, '#paypal-button');
    }
  }

  onPaymentCompleted(transactionId: string) {
    this.transactionId = transactionId;
    this.formService.getPaidCertifiedForm(transactionId).subscribe(
      data => {
        data.certifiedForm['transactionId'] = transactionId;
        this.formPaid.emit(data.certifiedForm);
      } );
  }

  downloadWord() {
    this.downloadWordOutput.emit();
  }

  downloadPdf() {
    this.downloadPdfOutput.emit();
  }

}
