import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { StateService, StepModelService } from '../../../../core';
import { NewRadioA } from './new-radio-a.interface';

@Component({
    selector: 'app-new-radio-a',
    templateUrl: './new-radio-a.component.html'
})
export class NewRadioAComponent implements OnInit, OnDestroy {

  @Input() field: any;
  @Input() optionalValues: any;
  @ViewChild('delete') delete: ElementRef;

  public state: string;
  public randomName: string;
  public radioValue: string;
  public radio: NewRadioA;
  public isNewForm: boolean;
  public identifier: string;
  public checked = false;

  constructor(
    private stateService: StateService,
    private stepModelService: StepModelService
  ) { }

  ngOnInit() {
    this.stateService.stateSubscribe().subscribe( (state: string) => {
      this.state = state;
      if (this.isNewForm && this.state === 'fill-form') {
        this.delete.nativeElement.querySelector('.remove-radio').style.display = 'none';
      } else if (this.isNewForm) {
        this.delete.nativeElement.querySelector('.remove-radio').style.display = 'flex';
      }
    });

    if (this.optionalValues) {
      this.identifier = this.optionalValues.identifier;
      this.randomName = 'name' + this.optionalValues.identifier;
      this.pushNewRadio();
      this.isNewForm = true;
    } else {
      this.isNewForm = false;
      this.radio = this.field;
      this.identifier = this.field.identifier;
      this.randomName = 'name' + this.field.identifier;
      this.radioValue = this.field.label;
      this.checked = this.field.checked;
    }
  }

  ngOnDestroy() {
    this.stepModelService.getStepsModel().forEach((step: any) => {
      if (step.identifier === this.identifier) {
        const filterRadios = step.radios.filter((radio: NewRadioA) => radio !== this.radio);
        step.radios = filterRadios;
      }
    });
  }

  pushNewRadio() {
    this.stepModelService.getStepsModel().forEach((step: any) => {
      if (step.identifier === this.identifier) {
        this.radio = {
          label: '',
          replacementOriginal: '',
          replacement: '',
          radioId: '',
          identifier: this.identifier,
          extraReplacements: [],
          checked: false
        };
        step.radios.push(this.radio);
      }
    });
  }

  onInputChange(checked: boolean) {
    if (this.state !== 'create-form') {
      this.stepModelService.getStepsModel().forEach((step: any) => {
        if (step.identifier === this.identifier) {
          step.radios.forEach((radio: NewRadioA) => {
            radio.checked = false;
          });
          this.radio.checked = checked;
          this.stepModelService.input(this.radioValue, step.type, step.wordToReplace, true);
        }
      });
    }
  }

  onQuestionChange() {
    this.radio.label = this.radioValue;
  }

  deleteElementDiv() {
    this.delete.nativeElement.remove();
  }

}
