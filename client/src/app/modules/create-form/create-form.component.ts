import { Component, OnInit, AfterViewInit, OnDestroy, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Form,
  FormService,
  CommonsService,
  StepModelService,
  StateService,
  OdfCreatorService,
  PlainTextCreatorService
} from '../../core';
import {
  InputTextComponent,
  InputRadioAComponent,
  InputRadioBComponent
 } from './inputsSchema';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html'
})
export class CreateFormComponent implements OnInit, OnDestroy {

  @ViewChild('quill') quill: any;
  @ViewChild('automatikDocDiv') automatikDocDiv: ElementRef;
  @ViewChild('inputsMenuDiv') inputsMenuDiv: ElementRef;
  @ViewChild('textPreviewDiv') textPreviewDiv: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef;
  @ViewChild('lightBox') lightBox: ElementRef;
  @ViewChild('modalChooseDocument') modalChooseDocument: ElementRef;
  @ViewChild('addQuestionMenuModal') addQuestionMenuModal: ElementRef;

  quillText = '';
  customOptions: any;
  quillModules: any;
  textPreview: string;
  injectedComponents: Array<any> = [];
  form: Form = new Form();
  formGroup: FormGroup;
  tags = new FormControl();
  fields: Array<any> = [];
  errors: Object = {};
  documentType = 'office';
  currentStep = 0;
  documentBodyClone: any;
  reader = new FileReader();
  documentService: any;
  state: string;
  plainTextSelected: boolean;
  currentGuide: string;
  toggleTab: string;

  // Booleans
  isButtonDisabled = false; isSubmitting = false; updatingForm = false; isDeleting = false;
  isNewForm = false; isFormValid = false; isInPreviewMode = false;

  constructor(
    private formService: FormService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
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
    window['DOCUMENTOURL'] = false;
    // If there's a form prefetched, load it
    this.route.data.subscribe(
      (data: {form: Form}) => {
        if (data.form) {
          this.quillText = data.form.text;
          this.textPreview = data.form.text;
          this.form = data.form;
          this.formGroup.patchValue(data.form);
          // this.fields = this.form.fields;
          this.form.documentType = data.form.documentType;
          this.updatingForm = true;
          setTimeout(() => {
              this.setCurrentStep(this.form.currentStep);
          }, 0);
        } else {
          this.updatingForm = false;
          this.toogleModal(this.modalChooseDocument.nativeElement);
        }
        this.setInitialState();
        if (this.updatingForm) {
          this.setDocument(this.form.documentType);
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.documentService) {
      if (this.documentType === 'office') {
        this.odfCreatorService.closeAndDestroyEditor();
      }
    this.documentService.destroyResizeDocumentContainer();
    }
    this.commonsService.setFormCreatorPlayground(true);
    window.removeEventListener('resize', (this.commonsService.resizeEditor as any));
  }

  preview(checked: boolean) {
    if (checked) {
      this.stateService.setState('fill-form');
      this.documentService.setPreview(this.quillText).then( () => {
        this.stepModelService.setInitialState();
      });
    } else {
      this.stateService.setState('create-form');
      this.documentService.unsetPreview();
    }
  }

  setInitialState() {
    this.stateService.setState('create-form');
    this.stateService.stateSubscribe().subscribe( (state: string) => {
      this.state = state;
    });
    this.stepModelService.stepsEvent.subscribe((event: string) => {
      if (event === 'remove-step') {
        this.form.fields = this.stepModelService.getStepsModel();
      }
    });
  }

  setDocument(documentType: string) {
    if (documentType === 'plain') {
      this.plainTextSelected = true;
    }
    this.documentType = documentType;
    this.form.documentType = documentType;
    this.stateService.setDocumentType(this.documentType);
    if (documentType === 'office') {
      this.setDivHeight();
      this.documentService = this.odfCreatorService;
      this.documentService.init('create-form', this.updatingForm ? this.form.text : '', 'editorContainer').then( (data: any) => {
        this.commonsService.setFormCreatorPlayground(false);
        this.commonsService.resizeEditor(true);
        window.addEventListener('resize', (this.commonsService.resizeEditor as any));
        this.documentService.setDragAndDropForSetUp();
        this.documentService.resizeDocumentContainer();
      });
    } else {
      this.documentService = this.plainTextCreatorService;
      this.quillModules = this.documentService.quillModules();
      this.customOptions = this.documentService.customOptions();
      this.documentService.init('editor-container', 'editor-preview');
      this.commonsService.setFormCreatorPlayground(false);
      this.commonsService.resizeEditor(true);
      window.addEventListener('resize', (this.commonsService.resizeEditor as any));
      this.documentService.resizeDocumentContainer();
      // this.setDivHeight();
    }
    this.stepModelService.init(this.form.fields, this.documentType);
  }

  setDivHeight() {
    setTimeout(() => {
      if (window.innerWidth > 885) {
        if ((document.querySelector('#form-creator') as HTMLElement) !== null) {
          const newHeight = (window.innerHeight 
            - (document.getElementsByTagName('nav')[0].clientHeight
            + document.querySelector('.sub-menu').clientHeight)) + 'px';

          (document.querySelector('#form-creator') as HTMLElement).style.height = newHeight;
        }
      }
    }, 100);
  }

  setCurrentStep(stepNum: number) {
    this.currentStep = stepNum;
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

  injectComponent(type: string) {
    let copyObjectComponent: Object;
    switch (type) {
      case 'input-text':
        copyObjectComponent = JSON.parse(JSON.stringify(InputTextComponent));
        break;
      case 'input-radio-a':
        copyObjectComponent = JSON.parse(JSON.stringify(InputRadioAComponent));
        break;
      case 'input-radio-b':
        copyObjectComponent = JSON.parse(JSON.stringify(InputRadioBComponent));
        break;
      default:
    }
    this.stepModelService.addNewStep(copyObjectComponent);
    this.toogleModal(this.addQuestionMenuModal.nativeElement);
    this.setCurrentStep(this.form.fields.length - 1);
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, false);
  }

  previewDocumentButton(setDocumentVisible: boolean) {
    this.commonsService.previewDocumentButton(setDocumentVisible);
      this.documentService.resizeEvent();
  }

  toastMessage(type: string, message1: string, message2: string) {
    this.commonsService.toastMessage(type, message1, message2);
  }

  setAdditionalQuillButtons() {
    // Force check
    setTimeout( () => { this.documentService.setAdditionalQuillButtons(this.quill.nativeElement);}, 100);
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
      if (this.form.fields.length || this.updatingForm) {
        // saves author Form

        // saves the generated text
        if (this.documentType === 'office') {
          if (this.state === 'fill-form') {
            this.stateService.setState('create-form');
            this.documentService.unsetPreview().then(() => {
              this.documentService.getDocumentToSave().then((data: any) => {
                this.form.text = data;
                this.saveForm();
              });
            });
          } else {
            this.documentService.getDocumentToSave().then((data: any) => {
              console.log(data);
              this.form.text = data;
              this.saveForm();
            });
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
          this.toastMessage('success', 'Ha sido creado', form.title);
          this.router.navigateByUrl('/create-form/edit/' + form.slug);
        } else {
          this.toastMessage('success', 'Actualizado', form.title);
        }
        this.isSubmitting = false;
      },
      err => {
        this.toastMessage('error', err.errors.message, 'Ha ocurrido un error');
        this.isSubmitting = false;
      }
    );
  }

  updateAuthorForm(values: Object) {
    (<any>Object).assign(this.form, values);
  }

  deleteForm() {
      this.formService.destroy(this.form.slug)
        .subscribe(
          success => {
            this.toastMessage('success', 'Eliminado', this.form.title);
            this.router.navigateByUrl('/');
          }
        );

  }

  validate() {
    if (this.form.fields.length === 0) {
      this.toggleTab = 'linkFormButton';
      this.toastMessage('error', 'El formulario no tiene ningún campo', 'Formulario vacío');
      return false;
    }
    if (this.formGroup.controls.title.invalid) {
      this.isFormValid = false;
      this.title.nativeElement.classList.add('input-error');
      this.toggleTab = 'linkInformationButton';
      this.toastMessage('error', 'Título no válido', 'Form empty');
      return false;
    } else {
      this.title.nativeElement.classList.remove('input-error');
    }
    if (this.formGroup.controls.description.invalid) {
      this.isFormValid = false;
      this.description.nativeElement.classList.add('input-error');
      this.toggleTab = 'linkInformationButton';
      this.toastMessage('error', 'Descripción no válida', 'Formulario vacío');
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
