import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-fields-area-middle',
  templateUrl: './fields-area-middle.component.html'
})
export class FieldsAreaMiddleComponent implements OnInit {

  @ViewChild('formAreaDiv') formAreaDiv: ElementRef;
  @Input() fields: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set currentStep(stepNum: number) {
    this.formAreaDiv.nativeElement.querySelectorAll('.form-creator__fields-area__field').forEach((step: any, index: number) => {
      if (stepNum === index) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }

}
