import {  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-add-question-menu',
  templateUrl: './add-question-menu.component.html'
})
export class AddQuestionMenuComponent implements OnInit {

  @Output() toggleLightboxEvent = new EventEmitter<string>();
  @Output() injectComponentEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggleLightbox(currentGuide: string) {
    this.toggleLightboxEvent.emit(currentGuide);
  }

  injectComponent(componentType: string) {
    this.injectComponentEvent.emit(componentType);
  }

}
