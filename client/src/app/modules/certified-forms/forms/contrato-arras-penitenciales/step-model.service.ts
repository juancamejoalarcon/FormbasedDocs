import { Injectable } from '@angular/core';

@Injectable()
export class StepModelService {

  public steps: Array<any>;

  constructor() { }

  test() {
    console.log('funciona');
  }

  init(steps: Array<Object>) {
    this.steps = steps;
    console.log(this.steps);
  }

  input(valueToReplace: string, inputType: string, identifier: string) {
    this.steps.forEach((step) => { 
      if (step.identifier) {
        console.log(step);
      }
    })
  }
}
