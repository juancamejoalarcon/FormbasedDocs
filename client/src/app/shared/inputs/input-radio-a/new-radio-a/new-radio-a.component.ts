import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-new-radio-a',
    templateUrl: './new-radio-a.component.html'
})
export class NewRadioAComponent implements OnInit {

  @Input() state: string;
  @Input() field: any;
  @Input() valueRadio: any;
  @Input() optionalValues: any;
  @ViewChild('delete') delete: ElementRef;
  public randomName: string;
  public randomId: string;

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
  deleteElementDiv() {
    this.delete.nativeElement.remove();
  }

  isNewAuthor () { return this.state === undefined; }
  isNewUser () { return this.state === 'newUser'; }
  isEditAuthor () { return this.state === 'editAuthor'; }
  isEditUser () { return this.state === 'editUser'; }
}
