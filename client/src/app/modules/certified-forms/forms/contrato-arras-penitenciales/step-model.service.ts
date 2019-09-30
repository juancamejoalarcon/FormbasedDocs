import { Injectable } from '@angular/core';

@Injectable()
export class StepModelService {

  public steps: Array<Object>;

  constructor() { }

  test() {
    console.log('funciona');
  }

  init(steps: Array<Object>) {
    this.steps = steps;
    console.log(this.steps);
  }
}
