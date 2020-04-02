import { Component,
         OnInit,
         ViewChild,
         Input,
         ElementRef } from '@angular/core';

@Component({
  selector: 'app-new-radio-c',
  templateUrl: './new-radio-c.component.html'
})
export class NewRadioCComponent implements OnInit {

  @Input() state: string;
  @Input() field: any;
  @Input() valueRadio: any;
  @Input() optionalValues: any;
  @ViewChild('delete', {static: false}) delete: ElementRef;
  @ViewChild('modalConditional', {static: false}) modalConditional: ElementRef;
  @ViewChild('modalContent', {static: false}) modalContent: any;
  public randomName: string;
  public randomNumberForModal = 'i' + Math.random().toString(36).substring(7);
  public randomId: string;
  public radio: any;

  constructor() { }

  ngOnInit() {
    if (this.isNewUser() || this.isEditUser()) {
      this.randomName = 'name' + this.field['referenceNumber'];
    } else {
      this.getRandomName();
    }
    this.getRandomId();
  }

  getRandomName() {
    if (this.isEditAuthor()) {
      this.randomName = 'name' + this.field['referenceNumber'];
    } else {
      this.randomName = this.optionalValues['randomName'];
    }
  }

  getRandomId() {
    if (this.isEditAuthor() || this.isNewUser() || this.isEditUser()) {
      this.randomId = this.field['randomId'];
    } else {
      this.randomId = this.optionalValues['randomId'];
    }
  }

  toggleModal() {
    this.modalConditional.nativeElement.classList.toggle('show-modal');
  }

  deleteElementDiv() {
    document.getElementById('idForHiddenInputs' + this.field['referenceNumber']).remove();
    this.delete.nativeElement.remove();
  }

  isNewAuthor () { return this.state === undefined; }
  isNewUser () { return this.state === 'newUser'; }
  isEditAuthor () { return this.state === 'editAuthor'; }
  isEditUser () { return this.state === 'editUser'; }

}
