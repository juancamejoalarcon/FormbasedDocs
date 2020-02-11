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

@Component({
  selector: 'app-i-radio-c',
  templateUrl: './i-radio-c.component.html'
})
export class IRadioCComponent implements OnInit {

  @Input() step: any;
  @Input() inputInvalid: any;
  @Output() emitIndication: EventEmitter<any> = new EventEmitter();

  constructor(
    private stepModelService: StepsService,
    private documentCreatorService: DocCreatorService,
  ) { }

  ngOnInit() {
  }

  showIndication() {
    this.emitIndication.emit();
  }

  onRadioCchanged(radioId, wordToReplace) {
    this.stepModelService.refreshCache();
    this.stepModelService.onInputRadioCSelected(radioId, wordToReplace, true, true, true)
  }

}
