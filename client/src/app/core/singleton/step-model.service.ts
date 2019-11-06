import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { OdfCreatorService } from './odf-creator.service';
import { PlainTextCreatorService } from './plain-text-creator.service';
import { StateService } from './state.service';

@Injectable()
export class StepModelService {

  public steps: Array<any>;
  public stepsEvent = new Subject();
  public documentService: any;
  public documentType: string;

  constructor(
    private odfCreatorService: OdfCreatorService,
    private plainTextCreatorService: PlainTextCreatorService,
    private stateService: StateService
  ) { }

  init(steps: Array<Object>, documentType: string) {
    this.steps = steps;
    this.documentType = documentType;
    if (this.documentType === 'plain') {
      this.documentService = this.plainTextCreatorService;
    } else if (this.documentType === 'office') {
      this.documentService = this.odfCreatorService;
    }
  }

  setInitialState() {
    this.steps.forEach((step) => {
      switch (step.type) {
        case 'iText':
            this.input(step.replacement, step.type, step.wordToReplace, false);
          break;
        default:
          break;
      }
    });
    this.buildDocument();
  }

  addNewStep(step: object) {
    this.steps.push(step);
  }

  removeStep() {
    this.stepsEvent.next('remove-step');
  }

  buildDocument() {
    this.documentService.buildDocument(this.steps);
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
