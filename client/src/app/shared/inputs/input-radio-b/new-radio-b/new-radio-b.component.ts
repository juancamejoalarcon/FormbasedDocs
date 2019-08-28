import { Component,
         OnInit,
         ViewChild,
         Input,
         ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-radio-b',
  templateUrl: './new-radio-b.component.html'
})
export class NewRadioBComponent implements OnInit {

  @Input() state: string;
  @Input() field: any;
  @Input() valueRadio: any;
  @Input() optionalValues: any;
  @ViewChild('delete') delete: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  public randomName: string;
  public randomNumberForModal = 'i' + Math.random().toString(36).substring(7);
  public randomId: string;

  constructor() { }

  ngOnInit() {
    if (this.isNewUser() || this.isEditUser()) {
      this.randomName = 'name' + this.field['referenceNumber'];
    } else {
      this.getRandomName();
    }
    this.getRandomId();
  }

  getRandomId() {
    this.randomId = 'iNewRadioA' + Math.random().toString(36).substring(7);
  }

  getRandomName() {
    if (this.isEditAuthor()) {
      this.randomName = 'name' + this.field['referenceNumber'];
    } else {
      this.randomName = this.optionalValues['randomName'];
    }
  }

  toggleModal() {
    this.modal.nativeElement.classList.toggle('show-modal');
  }

  deleteElementDiv() {
    this.delete.nativeElement.remove();
  }

  isNewAuthor () { return this.state === undefined; }
  isNewUser () { return this.state === 'newUser'; }
  isEditAuthor () { return this.state === 'editAuthor'; }
  isEditUser () { return this.state === 'editUser'; }

}
