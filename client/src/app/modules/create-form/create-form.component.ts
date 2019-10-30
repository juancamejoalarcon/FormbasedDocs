import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Form,
  FormService,
  CommonsService,
  ComponentInjectorService,
  StepModelService,
  StateService,
  OdfCreatorService,
  PlainTextCreatorService
} from '../../core';
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
export class CreateFormComponent implements OnInit, OnDestroy {

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
  isFormValid = false;

  // Nuevo
  documentType = 'office';
  currentStep = 0;
  documentBodyClone: any;
  isInPreviewMode = false;
  reader = new FileReader();
  documentService: any;
  state: string;

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
    private odfEditorService: OdfEditorService,
    private stepModelService: StepModelService,
    private stateService: StateService,
    private odfCreatorService: OdfCreatorService,
    private plainTextCreatorService: PlainTextCreatorService

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
          // this.setDocumentType(this.form.documentType);
          this.setDocumentPlayground();
          setTimeout(() => {
              this.setCurrentStep(this.form.currentStep);
          }, 0);
        } else {
          this.state = 'newAuthor';
          this.updatingForm = false;
          this.toogleModal(this.modalChooseDocument.nativeElement);
        }
        this.setInitialState();
      }
    );
  }

  ngOnDestroy() {
    if (this.documentType === 'office') {
      this.odfEditorService.closeAndDestroyEditor();
    }
  }

  /***************/
  /***NEW FORM****/
  /***************/
  preview(checked: boolean) {
    if (checked) {
      this.stateService.setState('fill-form');
      this.documentService.setPreview();
    } else {
      this.stateService.setState('create-form');
      this.documentService.unsetPreview();
    }
  }

  setInitialState() {
    this.stepModelService.init(this.form.fields);
    this.stateService.setState('create-form');
    this.stateService.stateSubscribe().subscribe( (state: string) => { 
      this.state = state;
    });
    this.stepModelService.stepsEvent.subscribe((event: string) => {
      if (event === 'remove-step') {
        this.setCurrentStep(this.currentStep - 1);
        this.form.fields = this.stepModelService.getStepsModel();
      }
    })
  }

  setDocument(documentType: string) {
    this.documentType = documentType;
    if (documentType === 'office') {
      this.setDivHeight();
      window.addEventListener('resize', this.setDivHeight);
      this.documentService = this.odfCreatorService;
      this.documentService.init('create-form', '', 'editorContainer').then( data => {
        this.documentService.setDragAndDropForSetUp();
      });
    } else {
      this.documentService = this.plainTextCreatorService;
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
        // (document.querySelector('#editor-container') as HTMLElement).style.height = newHeightForEditor;
      }
    }
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

  nextStepAfterValidate() {
    if (this.form.fields[this.currentStep]['mandatory'] && this.state === 'fill-form') {
      if (this.form.fields[this.currentStep]['type'] === 'iText') {
        if (this.form.fields[this.currentStep]['replacement'] === '') {
          this.toastMessage('error', 'Validation error', 'This field is mandatory');
        } else {
          this.setCurrentStep(this.currentStep + 1);
        }
      }
    } else {
      this.setCurrentStep(this.currentStep + 1);
    }
  }

  injectComponent(component: Object) {
    this.componentInjectorService.appendComponentToBody('Component', component, 'formAreaDiv', 'formAreaDiv', 'divWhereIsDeleteButton', {});
    this.injectedComponents = this.formAreaDiv.nativeElement.querySelectorAll('.inputCollection');
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, false);
  }


  /********************/
  /****END NEW FORM****/
  /********************/

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
      this.commonsService.toggleSpinner();
    }
  }

  toastMessage(type: string, message1: string, message2: string) {
    if (type === 'error') {
      this.toastr.error(message1, message2, {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    } else if (type === 'success') {
      this.toastr.success(message1, message2, {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
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
        ['link', 'image'],

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
      this.quill.nativeElement.querySelector('.ql-container').style.height = this.updatingForm ? '94%' : '94%';
      this.commonsService.resizeEditor();
      window.addEventListener('resize', this.commonsService.resizeEditor);
      this.commonsService.toggleSpinner();
    }, 100);
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

  submitForm() {
    if (this.validate()) {
      // Checks if user has introduced any input, if not user cannot submit unless user is updating the form
      if (this.injectedComponents || this.updatingForm) {
        // saves author Form
        
        // saves the generated text
        if (this.documentType === 'office') {
          if (this.isInPreviewMode) {
            this.toastMessage('error', 'Exit preview mode', 'Preview Mode On');
          } else {
            this.odfEditorService.saveForPreview();
            this.reader.readAsDataURL(window['ODTDOCUMENT']);
            this.reader.onloadend = () => {
                this.form.text = this.reader.result as string;
                this.saveForm();
            };
          }
        } else {
          this.form.text = this.quillText;
          this.saveForm();
        }
      } else {
        alert('Form is empty');
      }
    }
  }

  saveForm() {
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
          this.toastMessage('success', 'Has been created', form.title);
          this.router.navigateByUrl('/create-form/edit/' + form.slug);
        } else {
          this.toastMessage('success', 'Has been updated', form.title);
        }
        this.isSubmitting = false;
      },
      err => {
        this.toastMessage('error', err.errors.message, 'Something went wrong');
        this.isSubmitting = false;
      }
    );
  }

  updateAuthorForm(values: Object) {
    (<any>Object).assign(this.form, values);
  }

  deleteForm() {
    if (confirm('Are you sure you want to delete?')) {
      this.isDeleting = true;
      this.formService.destroy(this.form.slug)
        .subscribe(
          success => {
            this.toastMessage('success', 'Has been deleted', this.form.title);
            this.router.navigateByUrl('/');
          }
        );
    }
  }

  validate() {
    if (this.form.fields.length === 0) {
      this.linkFormButton.nativeElement.click();
      this.toastMessage('error', 'There are no fields in the form', 'Form empty');
      return false;
    }
    if (this.formGroup.controls.title.invalid) {
      this.isFormValid = false;
      this.title.nativeElement.classList.add('input-error');
      this.linkInformationButton.nativeElement.click();
      this.toastMessage('error', 'Title is not valid', 'Form empty');
      return false;
    } else {
      this.title.nativeElement.classList.remove('input-error');
    }
    if (this.formGroup.controls.description.invalid) {
      this.isFormValid = false;
      this.description.nativeElement.classList.add('input-error');
      this.linkInformationButton.nativeElement.click();
      this.toastMessage('error', 'Description is not valid', 'Form empty');
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

}
