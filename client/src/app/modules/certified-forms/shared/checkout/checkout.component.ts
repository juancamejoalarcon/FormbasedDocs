import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UserService, CheckoutService, Form, CommonsService } from '../../../../core';
import { Router } from '@angular/router';
import * as braintree from 'braintree-web';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  @Input() form: Form;
  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('conditions') conditions: ElementRef;
  public currentStep = 0;
  public email: string;
  public loadingPayment = true;
  public clientToken: string;
  public hostedFieldsInstance: braintree.HostedFields;
  public cardholdersName: string;
  public conditionsChecked: any;
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
    private commonsService: CommonsService,
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
    }
  }

  moveStep(type: string) {
    if (type === 'next') {
      if(this.validateBeforeNextStep()) {
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
        this.toastr.error('Email cannot be empty', 'Email is empty', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        return false;
      }
      if (!this.conditions.nativeElement.checked) {
        this.toastr.error('You must accept buying conditions', 'Accept', {
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
    window.sessionStorage[this.form.title] = JSON.stringify(this.form);
    this.router.navigate(['/auth/login'], {
      queryParams: {
        formPath: this.router.url.substring(this.router.url.lastIndexOf('/') + 1)
      }
    });
  }

  onSubmit() {
    this.tokenizeUserDetails();
  }

  paymentProcess() {
    if (this.steps[this.currentStep].type === 'payment') {
      this.commonsService.toggleSpinner();
      this.checkoutService.getToken().subscribe((token: string) => {
        this.loadingPayment = false;
        this.clientToken = token;
        this.createBraintreeUI(token);
        this.commonsService.toggleSpinner();
      });
    } else {
      this.loadingPayment = true;
    }
  }

  tokenizeUserDetails() {
    this.hostedFieldsInstance.tokenize({cardholderName: this.cardholdersName}).then((payload) => {
      // submit payload.nonce to the server from here
      this.checkoutService.pay(payload.nonce, this.form.id).subscribe(
        data => {
          if (data.resultTransactionId) {
            this.toastr.success('Payment completed', 'Payment success', {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing'
            });
          } else {
            this.toastr.error('An error has occured', 'Payment error', {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing'
            });
          }
          console.log(data);
      });

    }).catch((error) => {
      this.toastr.error('An error has occured please try again', 'Payment error', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    });
  }

  createBraintreeUI(TOKEN: any) {
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
            color: 'rgba(46, 46, 46, 0.8)'
          },
          '::placeholder': {
            'transition': 'transition: 100ms linear',
            'font-weight': 'lighter',
            'font-family': 'Lato',
            color: '#4ECDC4'
          },
        },

        // The hosted fields that we will be using
        // NOTE : cardholder's name field is not available in the field options
        // and a separate input field has to be used incase you need it
        fields: {
          number: {
            selector: '#card-number',
            placeholder: '1111 1111 1111 1111'
          },
          cvv: {
            selector: '#cvv',
            placeholder: '111'
          },
          expirationDate: {
            selector: '#expiration-date',
            placeholder: 'MM/YY'
          }
        }
      }).then((hostedFieldsInstance) => {

        this.hostedFieldsInstance = hostedFieldsInstance;
        const fields = hostedFieldsInstance.getState().fields;
        const isValid = Object.keys(fields).every(function (field) {
          return fields[field].isValid;
        });
      });
    });
  }

}
