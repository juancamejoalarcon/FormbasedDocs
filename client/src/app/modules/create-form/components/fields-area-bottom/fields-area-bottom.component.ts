import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-fields-area-bottom',
  templateUrl: './fields-area-bottom.component.html'
})
export class FieldsAreaBottomComponent implements OnInit {

  @Input() fields: Array<Object>;
  @Input() currentStep: number;
  @Output() setStepEvent = new EventEmitter<number>();
  @Output() nextStepEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setCurrentStep(stepNum: number) {
    this.setStepEvent.emit(stepNum);
  }

  nextStepAfterValidate() {
    this.nextStepEvent.emit();
  }

}
