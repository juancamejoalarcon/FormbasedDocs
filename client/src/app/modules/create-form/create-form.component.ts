import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormService, CommonsService, ComponentInjectorService } from '../../core';
import { InputTextComponent,
  InputRadioAComponent,
  InputRadioBComponent,
  InputRadioCComponent,
  OdfEditorService } from '../../shared';
import { ToastrService } from 'ngx-toastr';

import * as Sortable from 'sortablejs';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html'
})
export class CreateFormComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  @ViewChild('quill') quill: any;
  @ViewChild('formAreaDiv') formAreaDiv: ElementRef;
  @ViewChild('formBasedDocDiv') formBasedDocDiv: ElementRef;
  @ViewChild('inputsMenuDiv') inputsMenuDiv: ElementRef;
  @ViewChild('textPreviewDiv') textPreviewDiv: ElementRef;
  // @ViewChild('addQuestionMenuDiv') addQuestionMenuDiv: ElementRef;
  @ViewChild('linkFormButton') linkFormButton: ElementRef;
  @ViewChild('linkInformationButton') linkInformationButton: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('lightBox') lightBox: ElementRef;

  // Nuevo
  @ViewChild('modalChooseDocument') modalChooseDocument: ElementRef;
  @ViewChild('addQuestionMenuModal') addQuestionMenuModal: ElementRef;
  @ViewChild('subMenu') subMenu: ElementRef;


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
  form: Form = new Form();
  formGroup: FormGroup;
  tags = new FormControl();
  fields: Array<any> = [];
  errors: Object = {};
  isSubmitting: boolean = false;
  updatingForm: boolean = false;
  isDeleting = false;
  isNewForm = false;
  state: string;
  isFormValid = false;

  // Nuevo
  documentType = 'office';
  currentStep = 0;
  documentBodyClone: any;
  isInPreviewMode = false;
  reader = new FileReader();
  base64data: any;

  constructor(
    private componentInjectorService: ComponentInjectorService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private formService: FormService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private odfEditorService: OdfEditorService
  ) {
    // use the FormBuilder to create a form group
    this.formGroup = this.fb.group({
      'title': ['', Validators.required],
      'description': ['', Validators.required],
      indications: '',
      public: new FormControl(true),
      commentsEnabled: new FormControl(true),
      enabled: new FormControl(true)
    });
  }

  ngOnInit() {
    // If there's a form prefetched, load it
    this.route.data.subscribe(
      (data: {form: Form}) => {
        if (data.form) {
          this.quillText = data.form.text;
          this.textPreview = data.form.text;
          this.form = data.form;
          this.formGroup.patchValue(data.form);
          this.fields = this.form.fields;
          // Recompose the id to update the form
          for (const field of this.form.fields) {
            field['id'] = field['type'] + field['referenceNumber'];
          }
          this.updatingForm = true;
          this.state = 'editAuthor';
          this.setDocumentType(this.form.documentType);
          this.setDocumentPlayground();
          setTimeout(() => {
              this.setCurrentStep(this.form.currentStep);
          }, 0);
        } else {
          this.state = 'newAuthor';
          this.updatingForm = false;
          this.toogleModal(this.modalChooseDocument.nativeElement);
        }
      }
    );
    // this.quillConfig();
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
  }

  ngOnDestroy() {
    if (this.documentType === 'office') {
      this.odfEditorService.closeEditor();
    }
  }

  injectComponent(component: Object) {
    this.componentInjectorService.appendComponentToBody('Component', component, 'formAreaDiv', 'formAreaDiv', 'divWhereIsDeleteButton', {});
    this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
  }

  preview() {
    this.commonsService.replaceClassDnone(this.formBasedDocDiv);
    if (this.documentType === 'office') {
      const elementsThatCannotBeHide = ['dijit_form_Button_1', 'dijit_form_HorizontalSlider_0'];
      for (const element of document.querySelector('#webodfeditor-toolbar1').children as any) {
        if (!elementsThatCannotBeHide.includes(element.getAttribute('widgetid'))) {
          element.classList.toggle('d-none-widget');
        }
      }

      if (this.isInPreviewMode) {
        this.odfEditorService.closeEditor();
        this.odfEditorService.loadPreview();
        this.commonsService.toggleSpinner();
        setTimeout(() => {
          this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
          this.odfEditorService.resizeDocumentContainer();
          window.addEventListener('resize', this.odfEditorService.resizeDocumentContainer);
          this.odfEditorService.setDragAndDropForSetUp();
          this.commonsService.toggleSpinner();
          this.isInPreviewMode = false;
        }, 2000);
      } else {
        this.odfEditorService.saveForPreview();
        this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
        this.isInPreviewMode = true;
        this.odfEditorService.resizeDocumentContainer();
      }
      document.getElementById('webodfeditor-canvascontainer1').style.top =
        document.getElementsByClassName('webodfeditor-toolbarcontainer')[0].clientHeight + 'px';
    } else {
      this.generateText();
    }
    document.getElementById('webodfeditor-canvas1').classList.toggle('not-selectable');

  }

  generateText(e: any = {}) {
    this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
    const valuesToInsert: any = {};

    // Clean the authorForm.fields so when updating it doesn't duplicate inputs to save
    this.form.fields = [];
    let index = 0;
    for (const injectedComponent of this.injectedComponents) {
      if (this.commonsService.checkIfParentElementIdContainsString(injectedComponent, 'formAreaDiv', 9)) {
        // TEXT
        if (injectedComponent.id.includes('iText')) {
          const idWithOutFilter = injectedComponent.id.replace('iText', '');
          if (injectedComponent === document.activeElement) {
            valuesToInsert['focused' + idWithOutFilter] = [injectedComponent.value];
          } else {
            valuesToInsert[idWithOutFilter] = [injectedComponent.value];
          }
          // Save
          const newField: any = {
            type: 'iText',
            referenceNumber: idWithOutFilter,
            question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
            indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
            indicationsType: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter)
                                                            .getAttribute('data-indicationsType'),
            mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked,
            wordToReplace: idWithOutFilter,
            replacement: injectedComponent.value,
            index: index
          };
          this.form.fields.push(newField);
        }
        // RADIO-A
        if (injectedComponent.id.includes('iRadioA') === true) {
          const idWithOutFilter = injectedComponent.id.replace('iRadioA', '');
          // const name = 'input[name="' + ('name' + idWithOutFilter) + '"]';
          // const radios = this.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name);

          // for (let i = 0, length = radios.length; i < length; i++) {
          //   if (radios[i].checked) {
          //     if (radios[i] === document.activeElement) {
          //       valuesToInsert['focused' + idWithOutFilter] = [radios[i].value];
          //     } else {
          //       valuesToInsert[idWithOutFilter] = [radios[i].value];
          //     }
          //     // only one radio can be logically checked
          //     break;
          //   }
          // }
          // Save
          const newField: any = {
            type: 'iRadioA',
            referenceNumber: idWithOutFilter,
            // radios: Array.prototype.slice.call(radios).map((radio: any) => radio.value),
            question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
            // indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
            mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked,
            index: index
          };
          this.form.fields.push(newField);
        }
  //       // RADIO-B
  //       if (injectedComponent.id.includes('iRadioB') === true) {
  //         const idWithOutFilter = injectedComponent.id.replace('iRadioB', '');
  //         const name = 'input[name="' + ('name' + idWithOutFilter) + '"]';
  //         const radios = this.formAreaDiv.nativeElement.querySelector('#' + injectedComponent.id).querySelectorAll(name);

  //         for (let i = 0, length = radios.length; i < length; i++) {
  //           if (radios[i].checked) {
  //             if (radios[i] === document.activeElement) {
  //               valuesToInsert['focused' + idWithOutFilter] = [radios[i].parentNode.parentNode.querySelector('.name' + idWithOutFilter).value];
  //             } else {
  //               valuesToInsert[idWithOutFilter] = [radios[i].parentNode.parentNode.querySelector('.name' + idWithOutFilter).value];
  //             }
  //             // only one radio can be logically checked
  //             break;
  //           }
  //         }
  //         // Save form settings
  //         const newField: any = {
  //           type: 'iRadioB',
  //           referenceNumber: idWithOutFilter,
  //           radios: Array.prototype.slice.call(radios).map((rad: any) => {
  //               const radio = {
  //                 radio: rad.value,
  //                 value: rad.parentNode.parentNode.querySelector('.name' + idWithOutFilter).value,
  //                 referenceNumber: idWithOutFilter,
  //               };
  //               return radio;
  //             }),
  //           question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
  //           indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
  //           mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
  //         };
  //         this.form.fields.push(newField);
  //       }
  //       // RADIO-C
  //       if (injectedComponent.id.includes('iRadioC') === true) {
  //         const idWithOutFilter = injectedComponent.id.replace('iRadioC', '');
  //         const name = 'input[name="' + ('name' + idWithOutFilter) + '"]';
  //         const radios = this.formAreaDiv.nativeElement.querySelectorAll(name);

  //         for (let i = 0, length = radios.length; i < length; i++) {
  //           if (radios[i].checked) {
  //               valuesToInsert[idWithOutFilter] = [radios[i].getAttribute('data-texto')];
  //             // only one radio can be logically checked
  //             break;
  //           }
  //         }
  //         // Save form settings
  //         const newField: any = {
  //           type: 'iRadioC',
  //           referenceNumber: idWithOutFilter,
  //           radios: Array.prototype.slice.call(radios).map((rad: any) => {
  //             const radio = {
  //               radio: rad.value,
  //               value: rad.getAttribute('data-contentToExport'),
  //               referenceNumber: idWithOutFilter,
  //               randomId: rad.id
  //             };
  //             return radio;
  //           }),
  //           question: this.formAreaDiv.nativeElement.querySelector('.question' + idWithOutFilter).value,
  //           indications: this.formAreaDiv.nativeElement.querySelector('.indications' + idWithOutFilter).value,
  //           mandatory: this.formAreaDiv.nativeElement.querySelector('.mandatory' + idWithOutFilter).checked
  //         };
  //         this.form.fields.push(newField);
        }
        index++;
      }

      if (this.documentType === 'plain-text') {
        if (this.commonsService.isObjectEmpty(valuesToInsert)) {
          this.textPreview = this.quillText;
        } else {
          this.textPreview = this.commonsService.replaceIdsWithValues(valuesToInsert, this.quillText);
        }
  
        while (this.textPreviewDiv.nativeElement.firstChild) {
          this.textPreviewDiv.nativeElement.removeChild(this.textPreviewDiv.nativeElement.firstChild);
        }
  
        this.textPreviewDiv.nativeElement.insertAdjacentHTML('beforeend', this.textPreview);
        const focusedElement = document.getElementById('focused');
        if (focusedElement) {
          focusedElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (e.target) {
          if (e.target.classList.contains('icon-trash-alt-regular')) {
            this.setCurrentStep(this.currentStep - 1);
          }
        }
      } else {
        if (this.isInPreviewMode) {
          if (!this.commonsService.isObjectEmpty(valuesToInsert)) {
            this.odfEditorService.replaceWord(this.form.fields, this.documentBodyClone);
          }
        }
      }

    }

  addTag() {
    // retrieve tag control
    const tag = this.tags.value;
    // only add tag if it does not exist yet
    if (this.form.tags.indexOf(tag) < 0) {
      this.form.tags.push(tag);
    }
    // clear the input
    this.tags.reset('');
  }

  removeTag(tagName: string) {
    this.form.tags = this.form.tags.filter((tag) => tag !== tagName);
  }

  updateAuthorForm(values: Object) {
    (<any>Object).assign(this.form, values);
  }

  waitForElement(someVariable: any) {
    if (typeof someVariable !== "undefined") {
        //variable exists, do what you want
    } else {
        setTimeout(this.waitForElement.apply(someVariable), 250);
    }
  }

  submitForm() {
    if (this.validate()) {
      // Checks if user has introduced any input, if not user cannot submit unless user is updating the form
      if (this.injectedComponents || this.updatingForm) {
        // saves author Form
        this.generateText();
        // saves the generated text
        if (this.documentType === 'office') {
          this.odfEditorService.saveForPreview();
          this.reader.readAsDataURL(window['ODTDOCUMENT']);
          this.reader.onloadend = () => {
              this.form.text = this.reader.result as string;
              this.secondPartOfSubmitForm();
          };
        } else {
          this.form.text = this.quillText;
          this.secondPartOfSubmitForm();
        }
      } else {
        alert('Form is empty');
      }
    }
  }

  secondPartOfSubmitForm() {
    this.isSubmitting = true;
    // saves current step
    this.form.currentStep = this.currentStep;

    // update the model
    this.updateAuthorForm(this.formGroup.value);
    console.log(this.form);


    this.formService
    .save(this.form)
    .subscribe(
      form => {
        if (!this.updatingForm) {
          this.toastr.success('Has been created', form.title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
          this.router.navigateByUrl('/create-form/edit/' + form.slug);
        } else {
          this.toastr.success('Has been updated', form.title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        }
        this.isSubmitting = false;
      },
      err => {
        // this.errors = err;
        this.toastr.error(err.errors.message, 'Something went wrong', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        this.isSubmitting = false;
      }
    );
  }

  validate() {
    if (this.form.fields.length === 0) {
      this.linkFormButton.nativeElement.click();
      this.toastr.error('There are no fields in the form', 'Form empty', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      return false;
    }
    if (this.formGroup.controls.title.invalid) {
      this.isFormValid = false;
      this.title.nativeElement.classList.add('input-error');
      this.linkInformationButton.nativeElement.click();
      this.toastr.error('Title is not valid', 'Form empty', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      return false;
    } else {
      this.title.nativeElement.classList.remove('input-error');
    }
    if (this.formGroup.controls.description.invalid) {
      this.isFormValid = false;
      this.description.nativeElement.classList.add('input-error');
      this.linkInformationButton.nativeElement.click();
      this.toastr.error('Description is not valid', 'Form empty', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      return false;
    } else {
      this.description.nativeElement.classList.remove('input-error');
    }
    return true;
  }

  validateDescription(e: any) {
    if (e.target.value.length > 400) {
      e.target.value = e.target.value.substring(0, 400);
    }
  }

  deleteForm() {
    if (confirm('Are you sure you want to delete?')) {
      this.isDeleting = true;
      this.formService.destroy(this.form.slug)
        .subscribe(
          success => {
            this.toastr.success('Has been deleted', this.form.title, {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing'
            });
            this.router.navigateByUrl('/');
          }
        );
    }
  }


  setDivHeight() {
    if (window.innerWidth > 885) {
      if ((document.querySelector('#form-creator') as HTMLElement) !== null) {
        const newHeight = window.innerHeight - (document.querySelector('#form-creator') as HTMLElement).offsetTop + 'px';
        const toolBarOffsetTop = (document.querySelector('.ql-toolbar') as HTMLElement).offsetTop;
        const toolBarOffsetHeight = (document.querySelector('.ql-toolbar') as HTMLElement).offsetHeight;
        const newHeightForEditor = window.innerHeight - (toolBarOffsetTop + toolBarOffsetHeight) + 'px';

        (document.querySelector('#form-creator') as HTMLElement).style.height = newHeight;
        (document.querySelector('#editor-container') as HTMLElement).style.height = newHeightForEditor;
        (document.querySelector('#information') as HTMLElement).style.height = newHeight;
      }
    }
  }


  // toogleQuestionMenu(e: any) {

  //   // Relocate menu
  //   const navHeight = (document.querySelector('#form-creator') as HTMLElement).offsetTop;
  //   const questionNavHeight = this.addQuestionMenuDiv.nativeElement.offsetTop;
  //   if (questionNavHeight < navHeight) {
  //     this.addQuestionMenuDiv.nativeElement.style.transform = `translateY(${navHeight}px)`;
  //   } else {
  //     this.addQuestionMenuDiv.nativeElement.style.transform = `translateY(0px)`;
  //   }

  //   if (this.addQuestionMenuDiv.nativeElement.style.display === 'block') {
  //     if (e.target.classList.contains('close-question-menu') || e.target.tagName === 'BUTTON') {
  //       this.addQuestionMenuDiv.nativeElement.style.display = 'none';
  //       this.addQuestionMenuDiv.nativeElement.classList.remove('smooth-intro');
  //     }
  //   } else {
  //     this.addQuestionMenuDiv.nativeElement.style.display = 'block';
  //     this.addQuestionMenuDiv.nativeElement.classList.add('smooth-intro');
  //   }
  // }

  // enableSortablejs() {
  //   const content: HTMLElement = document.querySelector('#formAreaDiv') as HTMLElement;
  //   const sortable = Sortable.create(content, {
  //     handle: '.dragAndDropBotton',
  //     scrollSensitivity: 200,
  //     scroll: true,
  //     ghostClass: 'ghost',
  //     animation: 300,
  //     fallbackTolerance: 40,
  //     dragClass: 'sortable-drag'
  //   });

  // }

  // NUEVO

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, false);
  }

  setDocumentType(documentType: string) {
    this.documentType = documentType;
    this.form.documentType = this.documentType;
  }

  setDocumentPlayground() {

    if (this.documentType === 'office') {
      if (!this.updatingForm) {
        this.odfEditorService.createEditor('createForm');
      } else {
        this.odfEditorService.createEditorFromURI('createForm', 'editorContainer', this.form.text);
        // createEditorFromURI
      }
      this.odfEditorConfig();
    } else if (this.documentType === 'plain') {
      this.quillConfig();
      this.documentType = 'plain-text';
    }
  }

  topMenuNav(e: any) {
    this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
  }

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

  setAdditionalQuillButtons(e: any) {
    // Force check
    setTimeout( () => {
      const span = document.createElement('span');
      span.classList.add('ql-formats');
      const button = document.createElement('button');
      button.className = 'icon icon-expand-solid';
      button.addEventListener('click', () => {
        this.commonsService.enableFullScreen('editor-container');
      });
      span.appendChild(button);

      this.quill.nativeElement.querySelector('.ql-toolbar').appendChild(span);
      this.quill.nativeElement.querySelector('.ql-container').style.height = this.updatingForm ? '94%' : '98%';
      this.setDivHeight();
      window.addEventListener('resize', this.setDivHeight);
    }, 0);
  }

  setCurrentStep(stepNum: number) {
    this.currentStep = stepNum;
    this.formAreaDiv.nativeElement.querySelectorAll('.form-creator__fields-area__field').forEach((step: any, index: number) => {
      if (this.currentStep === index) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }

  odfEditorConfig() {
    this.commonsService.toggleSpinner();
    setTimeout(() => {
      //  this.odfEditorService.resizeDocumentContainer();
       this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
       this.odfEditorService.resizeDocumentContainer();
       window.addEventListener('resize', this.odfEditorService.resizeDocumentContainer);
       this.odfEditorService.setDragAndDropForSetUp();
       this.commonsService.toggleSpinner();
       // create node for preview
    }, 4000);
    window.addEventListener('resize', () => {
      this.commonsService.resizeEditor();
    });
    this.commonsService.resizeEditor();
  }

  toggleLightbox(lightBox: ElementRef) {
    this.commonsService.toggleLightbox(lightBox, false);
  }

}
