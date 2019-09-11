import { Component,
         OnInit,
         AfterViewInit,
         Input,
         ViewChild,
         ElementRef } from '@angular/core';
import { CommonsService, ComponentInjectorService} from '../../../core';

import {  NewRadioCComponent } from './new-radio-c';
import {  HiddenInputsComponent } from './hidden-inputs';

@Component({
  selector: 'app-input-radio-c',
  templateUrl: './input-radio-c.component.html'
})
export class InputRadioCComponent implements OnInit, AfterViewInit {

  @Input() state: string;
  @Input() field: any;
  @ViewChild('delete') delete: ElementRef;
  @ViewChild('idForHiddenInputs') idForHiddenInputs: ElementRef;
  @ViewChild('draggableText') draggableText: ElementRef;
  @ViewChild('radios') radios: ElementRef;
  @ViewChild('changeIdInput') changeIdInput: ElementRef;
  @ViewChild('rightMenu') rightMenu: ElementRef;
  @ViewChild('rightMenuButton') rightMenuButton: ElementRef;
  @ViewChild('showModalButton') showModalButton: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  public mandatory: boolean;
  public indications: string;
  public randomId: string;
  public referenceNumber: any;
  public questionIdentifier: string;
  public randomIdForNewRadio: string;
  public indicationsIdentifier: string;
  public mandatoryIdentifier: string;
  public functionReference: any;

  constructor(
    private commonsService: CommonsService,
    private componentInjectorService: ComponentInjectorService
  ) {}

  ngOnInit() {
    if (this.isNewUser() || this.isEditUser()) {
      this.randomId = this.field['referenceNumber'];
      this.referenceNumber = this.field['referenceNumber'];
    } else {
      this.getRandomId();
    }
    if (this.isEditUser()) {
      // Force click so it can update the value
      setTimeout( () => { this.radios.nativeElement.click(); }, 10);
    }
  }

  ngAfterViewInit() {
    this.enableDrag();
  }

  getRandomId() {
    if (this.isEditAuthor()) {
      this.referenceNumber = this.field['referenceNumber'];
      this.randomId = this.field['id'];
      this.questionIdentifier = 'question' + this.field['referenceNumber'];
      this.indicationsIdentifier = 'indications' + this.field['referenceNumber'];
      this.mandatoryIdentifier = 'mandatory' + this.field['referenceNumber'];
    } else {
      // I add a character so that when we query the id without the inputTex it works
      this.referenceNumber = 'i' + Math.random().toString(36).substring(7);
      this.randomId = 'iRadioC' + this.referenceNumber;
      this.questionIdentifier = 'question' + this.referenceNumber;
      this.indicationsIdentifier = 'indications' + this.referenceNumber;
      this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
    }
  }

  getRandomIdForNewRadio() {
    this.randomIdForNewRadio = 'iNewRadioC' + 'i' + Math.random().toString(36).substring(7);
  }

  changeId(e: any) {
    let newValue = e.target.value;
    if (newValue[0] !== 'i') {
      newValue = 'i' + newValue;
      this.changeIdInput.nativeElement.value = newValue;
    }
    if (newValue.length > 10) {
      newValue = newValue.substring(0, 10);
      this.changeIdInput.nativeElement.value = newValue;
    }
  
    // Update injected radios first, after change reference number
    const name = 'input[name="' + ('name' + this.referenceNumber) + '"]';
    this.radios.nativeElement.querySelectorAll(name).forEach(radio => {
      radio.name = 'name' + newValue;
    });
    this.radios.nativeElement.querySelectorAll('.name' + this.referenceNumber).forEach(element => {
      element.classList.replace('name' + this.referenceNumber, 'name' + newValue);
    });

    this.referenceNumber = newValue;
    this.randomId = 'iRadioC' + this.referenceNumber;
    this.questionIdentifier = 'question' + this.referenceNumber;
    this.indicationsIdentifier = 'indications' + this.referenceNumber;
    this.mandatoryIdentifier = 'mandatory' + this.referenceNumber;
    this.enableDrag();
  }

  enableDrag() {
    if (this.isEditAuthor() || this.isNewAuthor()) {
      this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
    }
  }

  showChangeIdInputField() {
    if (this.draggableText.nativeElement.style.display === 'none') {
      this.draggableText.nativeElement.style.display = 'inline';
      this.changeIdInput.nativeElement.style.display = 'none';
      if (this.changeIdInput.nativeElement.value === 'i') {
        this.getRandomId();
        this.enableDrag();
      }
    } else {
      this.draggableText.nativeElement.style.display = 'none';
      this.changeIdInput.nativeElement.style.display = 'inline';
      this.changeIdInput.nativeElement.focus();
    }
  }

  showRightMenu() {
    if ( this.rightMenu.nativeElement.style.display !== 'block') {
      this.rightMenu.nativeElement.style.display = 'block';
      this.rightMenu.nativeElement.classList.add('smooth-intro');
      this.functionReference = this.hideMenuRight.bind(this);
      setTimeout( () => {
        window.addEventListener('click', this.functionReference);
      }, 200);
    }
  }

  hideMenuRight(e: any) {
    if (this.rightMenu.nativeElement.contains(event.target)) {
      if (event.target === this.showModalButton.nativeElement) {
        this.rightMenu.nativeElement.style.display = 'none';
        window.removeEventListener('click', this.functionReference);
        this.toggleModal(false);
      }
    } else {
      this.rightMenu.nativeElement.style.display = 'none';
      window.removeEventListener('click', this.functionReference);
    }
  }

  toggleModal(eraseIndications: boolean) {
    this.modal.nativeElement.classList.toggle('show-modal');
    if (eraseIndications) {
      this.indications = '';
    }
  }

  addNewRadio() {
    this.getRandomIdForNewRadio();
    this.componentInjectorService.appendComponentToBody(
                                        'Radio', NewRadioCComponent, this.randomId, 'parentId' + this.randomId,
                                        'form-check-inline', {
                                          randomName: 'name' + this.referenceNumber,
                                          randomId: this.randomIdForNewRadio
                                        });
    this.componentInjectorService.appendComponentToBody(
                                        'InputsHidden', HiddenInputsComponent,
                                        'idForHiddenInputs' + this.randomId, 'idForHiddenInputs' + this.randomId, '',
                                        { randomId: this.randomIdForNewRadio });
    this.onRadioSelected();
  }

  deleteElementDiv() {
    this.delete.nativeElement.remove();
    this.idForHiddenInputs.nativeElement.remove();
  }

  onRadioSelected() {
    const name = 'input[name="' + ('name' + this.referenceNumber) + '"]';
    const radios = this.radios.nativeElement.querySelectorAll(name);
    for (let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        document.getElementById('inputsHidden' + radios[i].id).hidden = false;
        if (this.isNewUser() || this.isEditUser()) {
          this.idForHiddenInputs.nativeElement.querySelector('#inputsHidden' + radios[i].id)
          .childNodes[0].classList.replace('d-none', 'd-block');
        }
        // only one radio can be logically checked
      } else {
        document.getElementById('inputsHidden' + radios[i].id).hidden = true;
        if (this.isNewUser() || this.isEditUser()) {
          this.idForHiddenInputs.nativeElement.querySelector('#inputsHidden' + radios[i].id)
          .childNodes[0].classList.replace('d-block', 'd-none');
        }
      }
    }
  }

  isNewAuthor () { return this.state === undefined; }
  isNewUser () { return this.state === 'newUser'; }
  isEditAuthor () { return this.state === 'editAuthor'; }
  isEditUser () { return this.state === 'editUser'; }

}
