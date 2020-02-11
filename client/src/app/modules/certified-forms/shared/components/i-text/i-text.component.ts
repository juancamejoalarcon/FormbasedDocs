import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  StepsService
} from '../../services';



@Component({
  selector: 'app-i-text',
  templateUrl: './i-text.component.html'
})
export class ITextComponent implements OnInit {

  @Input() step: any;
  @Input() inputInvalid: any;
  @Output() emitIndication: EventEmitter<any> = new EventEmitter();

  constructor(
    private stepModelService: StepsService
  ) { }

  ngOnInit() {
  }

  showIndication() {
    this.emitIndication.emit();
  }

  onInput(e: any) {
    this.stepModelService.input(e.srcElement.value, this.step.wordToReplace, true, true);
  }

}
