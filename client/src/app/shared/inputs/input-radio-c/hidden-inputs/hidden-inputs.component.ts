import { Component,
         OnInit,
         OnChanges,
         ViewChild,
         Input,
         ElementRef } from '@angular/core';
import { CommonsService } from '../../../../core';

@Component({
  selector: 'app-hidden-inputs',
  templateUrl: './hidden-inputs.component.html'
})
export class HiddenInputsComponent implements OnInit {

  @ViewChild('divForMutationObserver') divForMutationObserver: ElementRef;
  @ViewChild('radios') radios: ElementRef;
  @ViewChild('dateDiv') dateDiv: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @Input() isInsideALoop: boolean;
  @Input() state: string;
  @Input() field: any;
  @Input() optionalValues: any;
  public randomId: string;
  public injectedComponents: Array<any> = [];
  public contentToExport: any = {
    text: '',
    fields: []
  };
  public currentQuestion: string;
  public currentIndications: string;

  public observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        this.updateContentToExport();
      }
    });
  });

  constructor(
    private commonsService: CommonsService
  ) { }

  ngOnInit() {
    if (this.isNewUser() || this.isEditUser()) {
      this.getRandomId();
      // Prefetch values
      // const contentToExport = document.getElementById(this.randomId)['value'];
      // this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
      this.updateContentToExport();
    } else {
      this.getRandomId();
    }
    this.observer.observe(this.divForMutationObserver.nativeElement, { attributes: true });

    if (this.isEditUser()) {
      // Force click so it can update the value
      setTimeout( () => { this.divForMutationObserver.nativeElement.click(); }, 10);
      setTimeout( () => {
        this.contentToExport.fields.forEach((field: any) => {
          if (field.type === 'iRadioC') {
            field.radios.forEach((radio: any) => {
              if (radio.checkedValue) {
                document.getElementsByName(radio['referenceNumber']).forEach((radioByName: any) => {
                  if (radioByName.checked) {
                    radioByName.click();
                  }
                });
              }
            });
          }
        });
      }, 10);
    }
  }

  getRandomId() {
    if (this.isInsideALoop) {
      this.randomId = this.optionalValues;
    } else {
      this.randomId = this.optionalValues['randomId'];
    }
  }

  generateRadioValue() {
    this.injectedComponents = this.divForMutationObserver.nativeElement.querySelectorAll('.inputsOfHiddenDiv');
    const valuesToInsert: any = {};
    for (const injectedComponent of this.injectedComponents) {
      const firstParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      const secondParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      const thirdParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      if (this.checkIfParentIsCurrentDiv(firstParent, secondParent, thirdParent)) {
        // TEXT
        if (injectedComponent.id.includes('iText')) {
          const idWithOutFilter = injectedComponent.id.replace('iText', '');
          valuesToInsert[idWithOutFilter] = [injectedComponent.value];
          // Save the value for user form
          if (this.isNewUser() || this.isEditUser()) {
            this.contentToExport.fields.forEach( (field: any) => {
              if (field.referenceNumber === idWithOutFilter) {
                field.value = injectedComponent.value;
              }
            });
          }
        }
        // DATE
        // if (injectedComponent.id.includes('iDate')) {
        //   const idWithOutFilter = injectedComponent.id.replace('iDate', '');
        //   valuesToInsert[idWithOutFilter] = [injectedComponent.value];
        //   // Save the value for user form
        //   if (this.isNewUser() || this.isEditUser()) {
        //     this.contentToExport.fields.forEach( (field: any) => {
        //       if (field.referenceNumber === idWithOutFilter) {
        //         field.value = injectedComponent.value;
        //       }
        //     });
        //   }
        // }
        // RADIO A
        if (injectedComponent.id.includes('iRadioA')) {
          const idWithOutFilter = injectedComponent.id.replace('iRadioA', '');
          const name = 'input[name="' + (idWithOutFilter) + '"]';
          const radios = injectedComponent.querySelectorAll(name);
          let checkedValue: string;
          for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              valuesToInsert[idWithOutFilter] = [radios[i].value];
              checkedValue = radios[i].value;
              // only one radio can be logically checked
              break;
            }
          }
          // Save the value for user form
          if (this.isNewUser() || this.isEditUser()) {
            this.contentToExport.fields.forEach( (field: any) => {
              if (field.referenceNumber === idWithOutFilter) {
                field.checkedValue = checkedValue;
              }
            });
          }
        }
        // RADIO B
        if (injectedComponent.id.includes('iRadioB')) {
          const idWithOutFilter = injectedComponent.id.replace('iRadioB', '');
          const name = 'input[name="' + (idWithOutFilter) + '"]';
          const radios = injectedComponent.querySelectorAll(name);
          let checkedValue: string;
          for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              valuesToInsert[idWithOutFilter] = [radios[i].value];
              checkedValue = radios[i].value;
              // only one radio can be logically checked
              break;
            }
          }
          // Save the value for user form
          if (this.isNewUser() || this.isEditUser()) {
            this.contentToExport.fields.forEach( (field: any) => {
              if (field.referenceNumber === idWithOutFilter) {
                field.checkedValue = checkedValue;
              }
            });
          }
        }
        // RADIO C
        if (!this.isALoop()) {
          if (injectedComponent.id.includes('iNewRadioC')) {
            if (injectedComponent.checked) {
              const idWithOutFilter = injectedComponent.name;
              valuesToInsert[idWithOutFilter] = [injectedComponent.getAttribute('data-texto')];
              // Save the value for user form
              const idOfSelectedRadio = injectedComponent.id.replace('loopRadio', '');
              if (this.isNewUser() || this.isEditUser()) {
                this.contentToExport.fields.forEach( (field: any) => {
                  if (field.referenceNumber === idWithOutFilter) {
                    field.radios.forEach((radio: any) => {
                      if (radio.randomId === idOfSelectedRadio) {
                        radio.value = injectedComponent.getAttribute('data-contentToExport');
                        radio.checkedValue = true;
                      } else {
                        radio.checkedValue = false;
                      }
                    });
                  }
                });
              }
            }
          }
        } else {
          if (injectedComponent.id.includes('iNewRadioC')) {
            if (injectedComponent.checked) {
              const idWithOutFilter = injectedComponent.name;
              valuesToInsert[idWithOutFilter] = [injectedComponent.getAttribute('data-texto')];
              const idOfSelectedRadio = injectedComponent.id.replace('loopRadio', '');
              if (this.isNewUser() || this.isEditUser()) {
                this.contentToExport.fields.forEach( (field: any) => {
                  if (field.referenceNumber === idWithOutFilter) {
                    field.radios.forEach((radio: any) => {
                      if (radio.randomId === idOfSelectedRadio) {
                        radio.value = injectedComponent.getAttribute('data-contentToExport');
                        radio.checkedValue = true;
                      } else {
                        radio.checkedValue = false;
                      }
                    });
                  }
                });
              }
            }
          }
        }
      }
    }
    const radioTextValue = this.commonsService.replaceIdsWithValues(valuesToInsert, this.contentToExport.text);
    // Eliminar el <p>

    // radioTextValue = radioTextValue.slice(3);
    // radioTextValue = radioTextValue.slice(0, radioTextValue.length - 4);
    if (!this.isALoop()) {
      document.getElementById(this.randomId).setAttribute('data-texto',  radioTextValue);
      // Carefull with this
      document.getElementById(this.randomId).setAttribute('data-contentToExport', JSON.stringify(this.contentToExport));
    } else {
      // Esto es un hack que hice, hago loop sobre todos los que tienen ese id,
      // porque a veces coge los inputs de los modales
      document.querySelectorAll('#' + 'loopRadio' + this.randomId).forEach((element: any) => {
        element.setAttribute('data-texto',  radioTextValue);
        // Carefull with this
        element.setAttribute('data-contentToExport', JSON.stringify(this.contentToExport));
      });
    }
  }

  showHiddenInput() {
    const radios = this.radios.nativeElement.querySelectorAll('.radiosOfInputHidden');
    radios.forEach((radio: any) => {
      const id2 = radio.id.replace('loopRadio', '');
      if (radio.checked) {
        this.radios.nativeElement.querySelector('#inputsHidden' + id2).childNodes[0].classList.replace('d-none', 'd-block');
      } else {
        this.radios.nativeElement.querySelector('#inputsHidden' + id2).childNodes[0].classList.replace('d-block', 'd-none');
      }
    });
    // classList.replace('d-none', 'd-block')
    // this.commonsService.replaceClassDnoneForDblock(document.getElementById('inputsHidden' + id));
  }

  updateContentToExport() {
    if (!this.isALoop()) {
      if (document.getElementById(this.randomId) !== null) {
        const contentToExport = document.getElementById(this.randomId).getAttribute('data-contentToExport') ;
        this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
      }
    } else {
      if (document.getElementById(this.randomId) !== null) {
        const contentToExport = document.getElementById('loopRadio' + this.randomId).getAttribute('data-contentToExport');
        this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
      } else {
        if (this.isNewUser() || this.isEditUser()) {
          const contentToExport = document.getElementById('loopRadio' + this.randomId).getAttribute('data-contentToExport');
          this.contentToExport = contentToExport !== null ? JSON.parse(contentToExport) : this.contentToExport;
        }
      }
    }
  }

  checkIfParentIsCurrentDiv(firstParent: any, secondParent: any, thirdParent: any) {
    if (firstParent.id.includes('inputsHidden' + this.randomId)
    || secondParent.id.includes('inputsHidden' + this.randomId) || thirdParent.id.includes('inputsHidden' + this.randomId)) {
      return true;
    } else {
      return false;
    }
  }

  toggleModal(question: string, indications: string) {
    this.modal.nativeElement.classList.toggle('show-modal');
    this.currentQuestion = question;
    this.currentIndications = indications;
  }

  // Force click so it can update the value
  forceClick() {
    this.dateDiv.nativeElement.click();
  }

  isALoop () { return this.isInsideALoop === true; }

  isNewAuthor () { return this.state === undefined; }
  isNewUser () { return this.state === 'newUser'; }
  isEditAuthor () { return this.state === 'editAuthor'; }
  isEditUser () { return this.state === 'editUser'; }
}
