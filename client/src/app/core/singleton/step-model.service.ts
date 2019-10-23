import { Injectable } from '@angular/core';

@Injectable()
export class StepModelService {

  public steps: Array<any>;

  constructor() { }

  init(steps: Array<Object>) {
    this.steps = steps;
  }

  addNewStep(step: object) {
    this.steps.push(step);
  }

  getStepsModel(): Array<any> {
    return this.steps;
  }
}
