import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
  CommonsService,
  Form
} from '../../../../core';
import {
  OdfEditorService
} from '../../../../shared';
import { SharedService } from '../../shared';
import * as stepsImport from './steps';

@Component({
  selector: 'app-pacto-de-socios',
  templateUrl: './pacto-de-socios.component.html'
})
export class PactoDeSociosComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalEnd') modalEnd: ElementRef;
  public form: Form = new Form();
  public currentStep = 0;
  public progresBarPercentage = '0%';
  public documentBodyClone: any;
  public steps: any = stepsImport.steps;


  constructor(
    private commonsService: CommonsService,
    private odfEditorService: OdfEditorService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    // location.reload();
    this.odfEditorService.createEditor('fillForm');
    if (window.sessionStorage['Pacto de socios']) {
      this.form = JSON.parse(window.sessionStorage['Pacto de socios']);
      this.steps = this.form.fields;
      this.currentStep = this.form.currentStep;
      this.updateProgressBarPercentage();
    } else {
      this.form.title = 'Pacto de socios';
    }
    this.sharedService.setForm(this.form);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //  this.odfEditorService.resizeDocumentContainer();
       this.documentBodyClone = document.getElementsByTagName('office:body')[0].cloneNode(true);
    }, 4000);
    window.addEventListener('resize', () => {
      this.commonsService.resizeEditor();
    });
    this.commonsService.resizeEditor();
  }

  ngOnDestroy() {
    this.odfEditorService.closeEditor();
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  replaceValuesInText() {
    this.odfEditorService.replaceWord(this.steps, this.documentBodyClone);
    this.form.fields = this.steps;
    this.form.currentStep = this.currentStep;
    this.sharedService.setForm(this.form);
  }


  showIndicationModal(word: string) {
    this.odfEditorService.showIndicationModal(word, this.documentBodyClone);
  }

  moveStep(type: string) {
    if (type === 'next') {
      this.currentStep += 1;
    } else if (type === 'previous') {
      this.currentStep -= 1;
    }
    this.updateProgressBarPercentage();
  }

  updateProgressBarPercentage() {
    this.progresBarPercentage = Math.round(((this.currentStep / this.steps.length) * 100)) + '%';
  }

  updateWordToReplace(input: any) {
    this.steps[this.currentStep].replacement = input;
    this.setFocus();
    this.replaceValuesInText();
  }

  setFocus() {
    this.steps.forEach((step) => {
      if (this.steps[this.currentStep] === step) {
        step.isFocused = true;
      } else {
        step.isFocused = false;
      }
    });
  }

  onRangeSelected(input: number) {
    this.steps[this.currentStep].value = input;
    // 1. Clean steps, so we don't add previously added steps
      while (this.steps[this.currentStep + 1] !== undefined && this.steps[this.currentStep + 1].isSubStep) {
        this.steps.splice((this.currentStep + 1), 1);
      }
    // 2. Add steps
    for (let i = 0; i < input; i++) {
      this.steps[this.currentStep].subSteps.forEach((subStep, index) => {
        subStep.wordToReplace = 'i' + Math.random().toString(36).substring(7);
        this.steps.splice((((this.currentStep)) + (index + 1) ), 0, Object.assign({}, subStep));
      });
    }
    this.replaceValuesInText();
  }

  onInputRadioCselected(optionId: string) {
    this.steps[this.currentStep].options.forEach((option) => {
      if (option.optionId === optionId) {
        option.checked = true;
        // 1. Clean steps, so we don't add previously added steps
        while (this.steps[this.currentStep + 1] !== undefined && this.steps[this.currentStep + 1].isRadioCSubStep) {
          this.steps.splice((this.currentStep + 1), 1);
        }
        // 2. Add steps
        option.subSteps.forEach((subStep, index) => {
          this.steps.splice(((this.currentStep + 1) + index ), 0, subStep);
        });
      } else {
        option.checked = false;
      }
    });
    this.replaceValuesInText();
  }

}

