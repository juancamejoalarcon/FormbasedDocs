import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-fields-area-middle',
  templateUrl: './fields-area-middle.component.html'
})
export class FieldsAreaMiddleComponent implements OnInit, OnChanges {

  @ViewChild('formAreaDiv', {static: false}) formAreaDiv: ElementRef;
  @Input() fields: Array<Object>;
  step: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges)  {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        if (propName === 'fields') {
          if (changes[propName].previousValue &&
            changes[propName].previousValue.length > changes[propName].currentValue.length) {
            this.setCurrentStep(this.step - 1);
          }
        }
      }
    }
  }

  @Input()
  set currentStep(stepNum: number) {
    this.setCurrentStep(stepNum);
  }

  setCurrentStep(stepNum: number) {
    this.step = stepNum;
    if (this.formAreaDiv) {
      this.formAreaDiv.nativeElement.querySelectorAll('.form-creator__fields-area__field').forEach((step: any, index: number) => {
        if (stepNum === index) {
          step.style.display = 'block';
        } else {
          step.style.display = 'none';
        }
      });
    }
  }

}
