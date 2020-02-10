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
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {
  DocCreatorService,
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
  private subject: Subject<string> = new Subject();

  constructor(
    private stepModelService: StepsService,
    private documentCreatorService: DocCreatorService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(this.stepModelService.getDebounceTime())
    ).subscribe(searchTextValue => {
      this.stepModelService.input(searchTextValue, this.step.wordToReplace);
    });
  }

  onInputNumberChanged(e: any) {
    let input = e.srcElement.value
    if (isNaN(input)) {
      this.toastr.error('Number not valid', 'Must be a number', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      this.input.nativeElement.style.borderBottom = '3px solid red';
    } else {
      this.input.nativeElement.style.borderBottom = '';
      if (input.includes(',')) {
        input = input.replace(',', '');
      }
      if (input.includes('.')) {
        input = input.replace('.', '');
      }
      this.subject.next(input);
    }
  }

  showIndication() {
    this.emitIndication.emit();
  }

}
