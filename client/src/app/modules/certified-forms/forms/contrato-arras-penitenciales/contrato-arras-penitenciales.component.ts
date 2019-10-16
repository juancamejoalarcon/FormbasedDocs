import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef } from '@angular/core';
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
  ) { }

  ngOnInit() {
    if (window.sessionStorage['Contrato de Arras Penitenciales']) {
      this.form = JSON.parse(window.sessionStorage['Contrato de Arras Penitenciales']);
      this.setInitiaState();
    } else {
      this.formsService.getCertifiedForm('contrato-arras-penitenciales').subscribe(
        certifiedForm => {
          this.form.fields = this.steps;
          this.form.title = certifiedForm.title;
          this.form.uri = certifiedForm.uri;
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
    this.documentCreatorService.init(this.form.uri);
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
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  moveStep(type: string) {
    if (type === 'next') {
      this.steps[this.currentStep].isCurrentStep = false;
      this.currentStep += 1;
      this.steps[this.currentStep].isCurrentStep = true;
    } else if (type === 'previous') {
      this.steps[this.currentStep].isCurrentStep = false;
      this.currentStep -= 1;
      this.steps[this.currentStep].isCurrentStep = true;
    }
    this.updateProgressBarPercentage();

    if (this.steps[this.currentStep].type === 'end') {
      this.prepareForCheckout();
    }
  }

  updateProgressBarPercentage() {
    this.progresBarPercentage = Math.round(((this.currentStep / this.steps.length) * 100)) + '%';
  }

  prepareForCheckout() {
    this.form.fields = this.steps;
    this.sharedService.setForm(this.form);
  }

  startCheckout() {
    this.steps[this.currentStep].checkoutProcess.isInited = true;
  }

}
