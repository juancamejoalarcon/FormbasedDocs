import { Component, OnInit, Input } from '@angular/core';
import { UserService, CheckoutService, Form, CommonsService } from '../../../../core';
import { Router } from '@angular/router';
import * as braintree from 'braintree-web';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  @Input() form: Form;
  public currentStep = 0;
  public email: string;
  public loadingPayment = true;
  public clientToken: string;
  public hostedFieldsInstance: braintree.HostedFields;
  public cardholdersName: string;
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
    private router: Router
  ) {}

  ngOnInit() {
    if (this.userService.getCurrentUser().email) {
      this.email = this.userService.getCurrentUser().email;
    } else {
      this.email = '';
    }
    if (this.form.fields[this.form.fields.length - 1]) {
      this.currentStep = this.form.fields[this.form.fields.length - 1]['checkoutProcess'].phase;
    }
  }

  moveStep(type: string) {
    if (type === 'next') {
      this.currentStep += 1;
    } else if (type === 'previous') {
      this.currentStep -= 1;
    }
    this.form.fields[this.form.fields.length - 1]['checkoutProcess'].phase = this.currentStep;
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

  tokenizeUserDetails() {
    console.log(this.cardholdersName);
    this.hostedFieldsInstance.tokenize({cardholderName: this.cardholdersName}).then((payload) => {
      console.log(payload);
      // submit payload.nonce to the server from here
    }).catch((error) => {
      console.log(error);
      // perform custom validation here or log errors
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

        console.log(hostedFieldsInstance.on);
        hostedFieldsInstance.on('focus', (event) => {
          const field = event.fields[event.emittedBy];
          const label = this.findLabel(field);
          label.classList.remove('filled'); // added and removed css classes
          // can add custom code for custom validations here
        });

        hostedFieldsInstance.on('blur', (event) => {
          const field = event.fields[event.emittedBy];
          const label = this.findLabel(field); // fetched label to apply custom validations
          // can add custom code for custom validations here
        });

        hostedFieldsInstance.on('empty', (event) => {
          console.log('llega3');
          const field = event.fields[event.emittedBy];
          // can add custom code for custom validations here
        });

        hostedFieldsInstance.on('validityChange', (event) => {
          console.log('llega4');
          const field = event.fields[event.emittedBy];
          const label = this.findLabel(field);
          if (field.isPotentiallyValid) { // applying custom css and validations
            label.classList.remove('invalid');
          } else {
            label.classList.add('invalid');
          }
          // can add custom code for custom validations here
        });
      });
    });
  }

    // Fetches the label element for the corresponding field
    findLabel(field: braintree.HostedFieldsHostedFieldsFieldData) {
      return document.querySelector('.hosted-field--label[for="' + field.container.id + '"]');
    }

}
