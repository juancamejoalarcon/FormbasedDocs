import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef } from '@angular/core';
import {
  CommonsService,
  Form
} from '../../../../core';
import { StepModelService } from './step-model.service';
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
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.stepModelService.init(this.steps);
    this.sharedService.setForm(this.form);
  }

  ngAfterViewInit() {
    this.commonsService.resizeEditor();
  }

  ngOnDestroy() {
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
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

}
