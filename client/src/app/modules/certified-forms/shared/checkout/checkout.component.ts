import { Component, OnInit, Input } from '@angular/core';
import { UserService, Form } from '../../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  @Input() form: Form;
  public currentStep = 0;
  public email: string;
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
    private router: Router
  ) { }

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
  }

  goToAuth() {
    window.sessionStorage[this.form.title] = JSON.stringify(this.form);
    this.router.navigate(['/auth/login'], {
      queryParams: {
        formPath: this.router.url.substring(this.router.url.lastIndexOf('/') + 1)
      }
    });
  }

}
