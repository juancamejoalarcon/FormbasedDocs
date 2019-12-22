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
  selector: 'app-i-checkbox',
  templateUrl: './i-checkbox.component.html'
})
export class ICheckboxComponent implements OnInit {

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


}
