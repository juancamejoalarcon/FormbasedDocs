import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  DocCreatorService,
  StepsService
} from '../../services';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-i-text',
  templateUrl: './i-text.component.html'
})
export class ITextComponent implements OnInit {

  @Input() step: any;
  @Input() inputInvalid: any;
  @Output() emitIndication: EventEmitter<any> = new EventEmitter();
  private subject: Subject<string> = new Subject();

  constructor(
    private stepModelService: StepsService,
    private documentCreatorService: DocCreatorService,
  ) { }

  ngOnInit() {
    this.subject.pipe(
      debounceTime(0)
    ).subscribe(searchTextValue => {
      this.stepModelService.input(searchTextValue, this.step.wordToReplace);
    });
  }

  showIndication() {
    this.emitIndication.emit();
  }

  onInput(e: any) {
    this.subject.next(e.srcElement.value);
  }

}
