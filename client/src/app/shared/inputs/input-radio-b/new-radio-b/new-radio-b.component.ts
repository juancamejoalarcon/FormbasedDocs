import { Component,
         OnInit,
         ViewChild,
         Input,
         ElementRef } from '@angular/core';
import { StateService, StepModelService } from '../../../../core';
import { NewRadioB } from './new-radio-b.interface';

@Component({
  selector: 'app-new-radio-b',
  templateUrl: './new-radio-b.component.html'
})
export class NewRadioBComponent implements OnInit {

  @Input() field: any;
  @Input() valueRadio: any;
  @Input() optionalValues: any;
  @ViewChild('delete') delete: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  public randomNumberForModal = 'i' + Math.random().toString(36).substring(7);
  public randomId: string;

  public state: string;
  public randomName: string;
  public radioValue: string;
  public radio: NewRadioB;
  public isNewForm: boolean;
  public identifier: string;
  public checked = false;
  public question: string;

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
        this.delete.nativeElement.querySelector('.remove-radio').style.display = 'block';
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
      this.question = this.field.label;
      this.radioValue = this.field.replacementOriginal;
      this.checked = this.field.checked;
    }
  }

  ngOnDestroy() {
    this.stepModelService.getStepsModel().forEach((step: any) => {
      if (step.identifier === this.identifier) {
        const filterRadios = step.radios.filter((radio: NewRadioB) => radio !== this.radio);
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
    this.stepModelService.getStepsModel().forEach((step: any) => {
      if (step.identifier === this.identifier) {
        step.radios.forEach((radio: NewRadioB) => {
          radio.checked = false;
        });
        this.radio.checked = checked;
        this.stepModelService.input(this.radioValue, step.type, step.wordToReplace, true);
      }
    });
  }

  onValueChanged() {
    this.radio.replacementOriginal = this.radioValue;
  }

  onQuestionChange() {
    this.radio.label = this.question;
  }

  deleteElementDiv() {
    this.delete.nativeElement.remove();
  }

  toggleModal() {
    this.modal.nativeElement.classList.toggle('show-modal');
  }
}
