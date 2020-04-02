import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { CommonsService, ComponentInjectorService } from '../../../../../core';
import { InputTextComponent } from '../../../input-text/input-text.component';
// import { InputDateComponent } from '../../../input-date/input-date.component';
import { InputRadioAComponent } from '../../../input-radio-a/input-radio-a.component';
import { InputRadioBComponent } from '../../../input-radio-b/input-radio-b.component';
import { InputRadioCComponent } from '../../../input-radio-c/input-radio-c.component';

// import * as Sortable from 'sortablejs';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html'
})
export class ModalContentComponent implements OnInit, AfterViewInit {

  @Input() idOfRadioParent: string;
  @Input() state: string;
  @Input() field: any;
  @ViewChild('quill', {static: false}) quill: any;
  @ViewChild('inputsMenuDiv', {static: false}) inputsMenuDiv: ElementRef;
  @ViewChild('automatikDocDiv', {static: false}) automatikDocDiv: ElementRef;
  @ViewChild('formAreaDiv', {static: false}) formAreaDiv: ElementRef;
  @ViewChild('textPreviewDiv', {static: false}) textPreviewDiv: ElementRef;
  @ViewChild('addQuestionMenuDiv', {static: false}) addQuestionMenuDiv: ElementRef;
  @ViewChild('editorContainer', {static: false}) editorContainer: ElementRef;

  public inputs: Array<any> = [
    InputTextComponent,
    InputRadioAComponent,
    InputRadioBComponent,
    InputRadioCComponent];
  public quillText = '';
  public customOptions: any;
  public quillModules: any;
  public textPreview: string;
  public injectedComponents: Array<any> = [];
  public isButtonDisabled: boolean = false;
  public contentToExport: any = {
    text: '',
    fields: []
  };
  // Use just when Editor Author
  public fields: Array<any> = [];
  public randomId: string;

  constructor(
    private componentInjectorService: ComponentInjectorService,
    private commonsService: CommonsService
  ) { }

  ngOnInit() {
    if (this.isEditAuthor()) {
      const parsedData = JSON.parse(this.field.value);
      this.contentToExport.fields = parsedData.fields;
      this.fields = parsedData.fields;
      this.contentToExport.text = this.textPreview = parsedData.text;
    } else {

    }
    this.quillConfig();
    this.getRandomId();
  }

  ngAfterViewInit() {
    this.setDivHeight();
    // this.enableSortablejs();
  }

  injectComponent(component: Object) {
    this.componentInjectorService.appendComponentToBody('Component', component, 'modalFormAreaDiv' + this.idOfRadioParent,
                                                        'modalFormAreaDiv' + this.idOfRadioParent, 'divWhereIsDeleteButton', {});
    this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
  }

  preview() {
    // this.commonsService.replaceClassDnoneForDblock(this.automatikDocDiv);
    // this.commonsService.replaceClassDnoneflexForDflex(this.automatikDocDiv);
    // this.commonsService.replaceClassDnonegridForDgrid(this.automatikDocDiv);
    this.commonsService.replaceOtherClasses(this.automatikDocDiv);
  }
  generateText() {
    this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
    const valuesToInsert: any = {};

    // Clean the contentToExport.fields so when updating it doesn't duplicate inputs to save
    this.contentToExport.fields = [];

    for (const injectedComponent of this.injectedComponents) {
      const firstParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      const secondParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      const thirdParent = injectedComponent.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      const fourthParent = injectedComponent.parentNode.parentNode.parentNode.parentNode
                                            .parentNode.parentNode.parentNode.parentNode.parentNode;

      if (this.checkIfParentIsCurrenModal(firstParent, secondParent, thirdParent, fourthParent)) {
        // TEXT
        if (injectedComponent.id.includes('iText')) {
          const idWithOutFilter = injectedComponent.id.replace('iText', '');
          valuesToInsert[idWithOutFilter] = [injectedComponent.value];
          // Save
          const newField: any = {
            type: 'iText',
            referenceNumber: idWithOutFilter,
            id: 'iText' + idWithOutFilter,
            question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
            indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
            mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
          };
          this.contentToExport.fields.push(newField);
        }
        // DATE
        // if (injectedComponent.id.includes('iDate') === true) {
        //   const idWithOutFilter = injectedComponent.id.replace('iDate', '');
        //   valuesToInsert[idWithOutFilter] = [injectedComponent.value];
        //   // Save
        //   const newField: any = {
        //     type: 'iDate',
        //     referenceNumber: idWithOutFilter,
        //     question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
        //     dateFormat: injectedComponent.parentNode.querySelector('.dateFormatSelectorDiv').value
        //   };
        //   this.contentToExport.fields.push(newField);
        // }
        // RADIO-A
        if (injectedComponent.id.includes('iRadioA') === true) {
          const idWithOutFilter = injectedComponent.id.replace('iRadioA', '');
          const name = 'input[name="' + ('name' + idWithOutFilter) + '"]';
          const radios = this.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name);

          for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              valuesToInsert[idWithOutFilter] = [radios[i].value];
              // only one radio can be logically checked
              break;
            }
          }
          // Save
          const newField: any = {
            type: 'iRadioA',
            referenceNumber: idWithOutFilter,
            id: 'iRadioA' + idWithOutFilter,
            radios: Array.prototype.slice.call(radios).map((radio: any) => radio.value),
            question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
            indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
            mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
          };
          this.contentToExport.fields.push(newField);
        }
        // RADIO-B
        if (injectedComponent.id.includes('iRadioB') === true) {
          const idWithOutFilter = injectedComponent.id.replace('iRadioB', '');
          const name = 'input[name="' + ('name' + idWithOutFilter) + '"]';
          const radios = this.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name);

          for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              valuesToInsert[idWithOutFilter] = [radios[i].parentNode.parentNode.querySelector('.name' + idWithOutFilter).value];
              // only one radio can be logically checked
              break;
            }
          }
          // Save form settings
          const newField: any = {
            type: 'iRadioB',
            referenceNumber: idWithOutFilter,
            id: 'iRadioB' + idWithOutFilter,
            radios: Array.prototype.slice.call(radios).map((rad: any) => {
                const radio = {
                  radio: rad.value,
                  value: rad.parentNode.parentNode.querySelector('.name' + idWithOutFilter).value,
                  referenceNumber: idWithOutFilter,
                };
                return radio;
              }),
            question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
            indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
            mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
          };
          this.contentToExport.fields.push(newField);
        }
        // RADIO-C
        if (injectedComponent.id.includes('iRadioC') === true) {
          const idWithOutFilter = injectedComponent.id.replace('iRadioC', '');
          const name = 'input[name="' + ('name' + idWithOutFilter) + '"]';
          const radios = this.formAreaDiv.nativeElement.querySelectorAll(name);

          for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              valuesToInsert[idWithOutFilter] = [radios[i].getAttribute('data-texto')];
              // only one radio can be logically checked
              break;
            }
          }
          // Save form settings
          const newField: any = {
            type: 'iRadioC',
            referenceNumber: idWithOutFilter,
            id: 'iRadioC' + idWithOutFilter,
            radios: Array.prototype.slice.call(radios).map((rad: any) => {
              const radio = {
                radio: rad.value,
                value: rad.getAttribute('data-contentToExport'),
                referenceNumber: idWithOutFilter,
                randomId: rad.id
              };
              return radio;
            }),
            question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value
          };
          this.contentToExport.fields.push(newField);
        }
      }
    }


    this.textPreview = this.commonsService.replaceIdsWithValues(valuesToInsert, this.contentToExport.text);
    while (this.textPreviewDiv.nativeElement.firstChild) {
      this.textPreviewDiv.nativeElement.removeChild(this.textPreviewDiv.nativeElement.firstChild);
    }
    this.textPreviewDiv.nativeElement.insertAdjacentHTML('beforeend', this.textPreview);
    document.getElementById(this.idOfRadioParent).setAttribute('data-contentToExport', JSON.stringify(this.contentToExport));

  }

  checkIfParentIsCurrenModal(firstParent: any, secondParent: any, thirdParent: any, fourthParent: any) {
    if (firstParent.id.includes(this.idOfRadioParent) || secondParent.id.includes(this.idOfRadioParent)
        || thirdParent.id.includes(this.idOfRadioParent) || fourthParent.id.includes(this.idOfRadioParent)) {
      return true;
    } else {
      return false;
    }
  }

  // UTILITY
  quillConfig() {

    this.customOptions = [{
      import: 'formats/font',
      whitelist: ['roboto', 'times-new-roman', 'arial', 'lato', 'montserrat']
    }];

    this.quillModules =   {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': ['black', 'grey', '#556270', '#4ECDC4', '#C44D58', '#FF6B6B', '#C7F464'] },
        { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': ['', 'roboto', 'times-new-roman', 'arial', 'lato', 'montserrat'] }],
        [{ 'align': [] }],

        ['clean']
      ]
    };
  }

  setDivHeight() {
    if (window.innerWidth > 885) {
      setTimeout(function() {
        const newHeight = this.automatikDocDiv.nativeElement.clientHeight;
        this.automatikDocDiv.nativeElement.style.height = newHeight;
        this.editorContainer.nativeElement.style.height = newHeight;
      }.bind(this), 100);

    }
  }

  getRandomId() {
    this.randomId = 'idForQuestionMenu' + 'i' + Math.random().toString(36).substring(7);
  }

  toogleQuestionMenu(e: any) {
    // Relocate menu
    const navHeight = (document.querySelector('#form-creator') as HTMLElement).offsetTop;
    const questionNavHeight = this.addQuestionMenuDiv.nativeElement.offsetTop;
    if (questionNavHeight < navHeight) {
      this.addQuestionMenuDiv.nativeElement.style.transform = `translateY(${navHeight}px)`;
    } else {
      this.addQuestionMenuDiv.nativeElement.style.transform = `translateY(0px)`;
    }

    if (this.addQuestionMenuDiv.nativeElement.style.display === 'block') {
      if (e.target.classList.contains(this.randomId) || e.target.tagName === 'BUTTON') {
        this.addQuestionMenuDiv.nativeElement.style.display = 'none';
        this.addQuestionMenuDiv.nativeElement.classList.remove('smooth-intro');
      }
    } else {
      this.addQuestionMenuDiv.nativeElement.style.display = 'block';
      this.addQuestionMenuDiv.nativeElement.classList.add('smooth-intro');
    }
  }

  // enableSortablejs() {
  //   const sortable = Sortable.create(this.formAreaDiv.nativeElement, {
  //     handle: '.dragAndDropBotton',
  //     scrollSensitivity: 200,
  //     scroll: true,
  //     ghostClass: 'ghost',
  //     animation: 300,
  //     fallbackTolerance: 40,
  //     dragClass: 'sortable-drag'
  //   });
  // }

  isNewAuthor () { return this.state === undefined; }
  isNewUser () { return this.state === 'newUser'; }
  isEditAuthor () { return this.state === 'editAuthor'; }
  isEditUser () { return this.state === 'editUser'; }
}
