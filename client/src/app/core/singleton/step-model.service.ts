import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { OdfCreatorService } from './odf-creator.service';

@Injectable()
export class StepModelService {

  public steps: Array<any>;
  public stepsEvent = new Subject()

  constructor(
    private odfCreatorService: OdfCreatorService
  ) { }

  init(steps: Array<Object>) {
    this.steps = steps;
  }

  addNewStep(step: object) {
    this.steps.push(step);
  }

  removeStep() {
    this.stepsEvent.next('remove-step');
  }

  buildDocument() {
    this.odfCreatorService.buildDocument(this.steps);
    console.log(this.steps);
  }

  input(replacement: string, inputType: string, wordToReplace: string, buildDocumentAfter: boolean = true) {
    // 1. Find the step
    this.steps.forEach((step) => {
      if (step.wordToReplace === wordToReplace) {
        step.replacement = replacement;
        step.isFocused = true;
      } else {
        step.isFocused = false;
      }
    });
    if (buildDocumentAfter) {
      this.buildDocument();
    }
  }

  getStepsModel(): Array<any> {
    return this.steps;
  }
}
