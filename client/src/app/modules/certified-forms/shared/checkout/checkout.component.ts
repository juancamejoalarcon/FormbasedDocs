import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {

  public currentStep = 0;
  public steps = [
    {
      type: 'cart'
    },
    {
      type: 'login'
    },
    {
      type: 'payment'
    },
    {
      type: 'finish'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  moveStep(type: string) {
    if (type === 'next') {
      this.currentStep += 1;
    } else if (type === 'previous') {
      this.currentStep -= 1;
    }
  }

}
