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
  selector: 'app-i-text',
  templateUrl: './i-text.component.html'
})
export class ITextComponent implements OnInit {

  @Input() step: any;
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
