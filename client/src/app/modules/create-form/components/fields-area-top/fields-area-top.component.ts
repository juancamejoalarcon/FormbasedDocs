import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-fields-area-top',
  templateUrl: './fields-area-top.component.html'
})
export class FieldsAreaTopComponent implements OnInit {

  @Input() state: string;
  @Output() previewDocumentEvent = new EventEmitter<any>();
  @Output() toogleModalEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  previewDocumentButton() {
    this.previewDocumentEvent.emit();
  }

  toogleModal() {
    this.toogleModalEvent.emit();
  }

}
