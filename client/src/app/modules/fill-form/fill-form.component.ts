import { Component, OnInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  Form,
  FormService,
  UserService,
  CommonsService,
  StateService,
  OdfCreatorService,
  PlainTextCreatorService,
  StepModelService
} from '../../core';
import { ToastrService } from 'ngx-toastr';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html'
})
export class FillFormComponent implements OnInit, OnDestroy {

  @ViewChild('formAreaDiv') formAreaDiv: ElementRef;
  @ViewChild('formBasedDocDiv') formBasedDocDiv: ElementRef;
  @ViewChild('linkFormButton') linkFormButton: ElementRef;
  @ViewChild('modal') modal: ElementRef;

  @ViewChild('subMenu') subMenu: ElementRef;

  public state: string;
  public generatedText: any;
  // Antes era fields: any. Estudiar si se puede usar authorForm fields
  public fields: Array<any> = [];
  public isDeleting = false;
  public form: Form = new Form();
  public originalForm: Form = new Form();
  public errors: Object = {};
  public isSubmitting = false;
  public updatingForm = false;

  documentType = 'office';
  currentStep = 0;
  public progresBarPercentage = '0%';
  documentService: any;


  constructor(
    private formsService: FormService,
    private userService: UserService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private odfCreatorService: OdfCreatorService,
    private plainTextCreatorService: PlainTextCreatorService,
    private stateService: StateService,
    private stepModelService: StepModelService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        const form: Form = data.form;
        this.form = form;
        this.fields = form.fields;
        this.generatedText = form.text;
        if (form.type === 'Created') {
          this.form.originalSlug = form.slug;
          this.updatingForm = false;
        } else {
          this.updatingForm = true;
        }
        this.updateProgressBarPercentage();
        this.setInitialState();
        this.setDocument();
        this.setDivHeight();
        window.addEventListener('resize', this.setDivHeight);
      }
    );
    this.formsService.get(this.form.originalSlug).subscribe(
      originalForm => {
        this.originalForm = originalForm;
      } );
  }

  ngOnDestroy() {
    if (this.form.documentType === 'office') {
      this.odfCreatorService.closeAndDestroyEditor();
      this.odfCreatorService.destroyResizeDocumentContainer();
    }
  }

  setInitialState() {
    this.stateService.setState('fill-form');
    this.stateService.setDocumentType(this.form.documentType);
    this.documentType = this.form.documentType;
  }

  generateText() {
    // Save user form settings
    // this.form.fields = newFieldsToSave;
  }

  submitForm() {
    // Saves author Form
    this.isSubmitting = true;
    this.form.type = 'Filled';
    // post the changes
    this.formsService
    .save(this.form)
    .subscribe(
      form => {
        this.toastr.success('Has been created', form.title, {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        this.router.navigateByUrl('/fill-form/edit/' + form.slug);
        },

      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  deleteForm() {
    this.isDeleting = true;

    this.formsService.destroy(this.form.slug)
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

  // // UTILITY
  setDivHeight() {
    if (window.innerWidth > 885) {
      if ((document.querySelector('#form-creator') as HTMLElement) !== null) {
        const newHeight = window.innerHeight - (document.querySelector('#form-creator') as HTMLElement).offsetTop + 'px';
        (document.querySelector('#form-creator') as HTMLElement).style.height = newHeight;
      }
    }
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, false);
  }

  setDocument() {
    this.commonsService.toggleSpinner();
    if (this.form.documentType === 'office') {
      this.setDivHeight();
      window.addEventListener('resize', this.setDivHeight);
      this.documentService = this.odfCreatorService;
      this.documentService.init('fillForm', this.form.text, 'editorContainer').then( data => {
        this.commonsService.toggleSpinner();
        this.documentService.setDragAndDropForSetUp();
        this.stepModelService.init(this.form.fields, this.documentType);
        this.stepModelService.setInitialState();
      });
    } else {
      this.documentService = this.plainTextCreatorService;
      this.documentService.init('editor-container', 'editor-preview');
      this.documentService.setQuillText(this.form.text);
      this.setDivHeight();
      window.addEventListener('resize', this.setDivHeight);
      this.stepModelService.init(this.form.fields, this.documentType);
      // this.stepModelService.setInitialState();
      this.commonsService.toggleSpinner();
    }
  }

  topMenuNav(e: any) {
    this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
  }

  setCurrentStep(stepNum: number) {
    this.currentStep = stepNum;
    this.formAreaDiv.nativeElement.querySelectorAll('.form-creator__fields-area__field').forEach((step: any, index: number) => {
      if (this.currentStep === index + 1) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
    this.updateProgressBarPercentage();
  }

  nextStepAfterValidate() {
    const currentStep = this.form.fields[this.currentStep - 1];
    if (currentStep['mandatory']) {
      if (currentStep['type'] === 'iText') {
        if (currentStep['replacement'] === '') {
          this.commonsService.toastMessage('error', 'Validation error', 'This field is mandatory');
        } else {
          this.setCurrentStep(this.currentStep + 1);
        }
      }
    } else {
      this.setCurrentStep(this.currentStep + 1);
    }
  }

  updateProgressBarPercentage() {
    this.progresBarPercentage = Math.round(((this.currentStep / this.form.fields.length) * 100)) + '%';
  }

}
