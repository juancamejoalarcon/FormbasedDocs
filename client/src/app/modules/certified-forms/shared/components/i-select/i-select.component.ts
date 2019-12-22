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
  selector: 'app-i-select',
  templateUrl: './i-select.component.html'
})
export class ISelectComponent implements OnInit {

  @Input() step: any;
  @Input() inputInvalid: any;
  @Output() emitIndication: EventEmitter<any> = new EventEmitter();

  constructor(
    private stepModelService: StepsService,
    private documentCreatorService: DocCreatorService,
  ) { }

  ngOnInit() {
  }

  onInputSelectChanged(e: any) {
    this.stepModelService.onInputRadioCSelected(e.target.value, this.step.wordToReplace);
  }

  showIndication() {
    this.emitIndication.emit();
  }

}
