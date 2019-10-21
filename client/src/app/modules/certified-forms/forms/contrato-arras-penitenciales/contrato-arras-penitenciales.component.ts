import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CommonsService,
  FormService,
  Form
} from '../../../../core';
import { StepModelService } from './step-model.service';
import { DocumentCreatorService } from './document-creator.service';
import { SharedService } from '../../shared';
import * as stepsImport from './steps';

@Component({
  selector: 'app-contrato-arras-penitenciales',
  templateUrl: './contrato-arras-penitenciales.component.html'
})
export class ContratoArrasPenitencialesComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalEnd') modalEnd: ElementRef;
  @ViewChild('input') input: ElementRef;
  public form: Form = new Form();
  public currentStep = 0;
  public progresBarPercentage = '0%';
  public steps: any = stepsImport.steps;

  constructor(
    private stepModelService: StepModelService,
    private commonsService: CommonsService,
    private sharedService: SharedService,
    private documentCreatorService: DocumentCreatorService,
    private formsService: FormService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (window.sessionStorage['Contrato de Arras Penitenciales']) {
      this.form = JSON.parse(window.sessionStorage['Contrato de Arras Penitenciales']);
      this.steps = this.form.fields;
      this.setInitiaState();
    } else {
      this.formsService.getCertifiedForm('contrato-arras-penitenciales').subscribe(
        certifiedForm => {
          this.form.fields = this.steps;
          this.form.title = certifiedForm.title;
          this.form.uri = certifiedForm.uri;
          this.form.id = 'contrato-arras-penitenciales';
          this.form.image = certifiedForm.image;
          this.setInitiaState();
        } );
    }

  }

  ngAfterViewInit() {
    this.commonsService.resizeEditor();
  }

  ngOnDestroy() {
    this.documentCreatorService.destroy();
  }

  setInitiaState() {
    this.stepModelService.init(this.form.fields);
    this.sharedService.setForm(this.form);
    this.form.fields.forEach((step: any, index) => {
      if (step.isCurrentStep) {
        this.currentStep = index;
        this.updateProgressBarPercentage();
        if (this.steps[this.currentStep].type === 'end' && this.steps[this.currentStep].checkoutProcess.isInited) {
          this.toogleModal(this.modalEnd.nativeElement);
        }
      }
    });
    this.documentCreatorService.init(this.form.uri).then( data => {
      this.stepModelService.buildDocument();
      if (!window.sessionStorage['Contrato de Arras Penitenciales']) {
        this.stepModelService.setInitialState();
      }
    });
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  moveStep(type: string) {
    if (type === 'next') {
      if (this.validateBeforeNextStep(this.steps[this.currentStep])) {
        this.steps[this.currentStep].isCurrentStep = false;
        this.steps[this.currentStep + 1].isCurrentStep = true;
        this.currentStep += 1;
      }
    } else if (type === 'previous') {
      this.steps[this.currentStep].isCurrentStep = false;
      this.steps[this.currentStep - 1].isCurrentStep = true;
      this.currentStep -= 1;
    }
    this.updateProgressBarPercentage();

    if (this.steps[this.currentStep].type === 'end') {
      this.prepareForCheckout();
    }
  }

  validateBeforeNextStep(step: any) {
    if (step.mandatory) {
      console.log(step.replacement);
      if (step.replacement === '') {
        this.toastr.error('Form cannot be empty', 'Empty field', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        this.input.nativeElement.style.borderBottom = '3px solid red';
        return false;
      }
    }
    return true;
  }

  updateProgressBarPercentage() {
    this.progresBarPercentage = Math.round(((this.currentStep / this.steps.length) * 100)) + '%';
  }

  showIndication() {
    const step = this.steps[this.currentStep];
    if (step.indications.areIndications) {
      this.documentCreatorService.showIndicationInsideText(step.wordToReplace, step.indications.value);
    }
  }

  prepareForCheckout() {
    this.form.fields = this.steps;
    this.sharedService.setForm(this.form);
  }

  startCheckout() {
    this.steps[this.currentStep].checkoutProcess.isInited = true;
  }

  onFormPaid(e: any) {
    console.log('FORM PAID');
    console.log(e);
    this.documentCreatorService.destroy();
    this.documentCreatorService.createEditorFromURI('fillForm', 'editorContainer', e.uri);
  }

}
