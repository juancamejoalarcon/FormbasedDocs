import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  StepsService
} from '../../services';

@Component({
  selector: 'app-i-number',
  templateUrl: './i-number.component.html'
})
export class INumberComponent implements OnInit {

  @ViewChild('input') input: ElementRef;
  @Input() step: any;
  @Input() inputInvalid: any;
  @Output() emitIndication: EventEmitter<any> = new EventEmitter();

  constructor(
    private stepModelService: StepsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
  }

  onInputNumberChanged(e: any) {
    let newValue = e.srcElement.value
    if (isNaN(newValue)) {
      this.toastr.error('Number not valid', 'Must be a number', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      this.input.nativeElement.style.borderBottom = '3px solid red';
    } else {
      this.input.nativeElement.style.borderBottom = '';
      if (newValue.includes(',')) {
        newValue = newValue.replace(',', '');
      }
      if (newValue.includes('.')) {
        newValue = newValue.replace('.', '');
      }
      this.stepModelService.input(newValue, this.step.wordToReplace, true, true);
    }
  }

  showIndication() {
    this.emitIndication.emit();
  }

}
