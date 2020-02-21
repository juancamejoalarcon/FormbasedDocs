import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
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
export class FillFormComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('formAreaDiv') formAreaDiv: ElementRef;
  @ViewChild('automatikDocDiv') automatikDocDiv: ElementRef;
  @ViewChild('linkFormButton') linkFormButton: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalDownload') modalDownload: ElementRef;

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
      }
    );
    this.formsService.get(this.form.originalSlug).subscribe(
      originalForm => {
        this.originalForm = originalForm;
      } );
  }

  ngAfterViewInit() {
    if (this.form.documentType === 'plain') {
      this.stepModelService.setInitialState();
    }
  }

  ngOnDestroy() {
    if (this.form.documentType === 'office') {
      this.odfCreatorService.closeAndDestroyEditor();
    }
    this.documentService.destroyResizeDocumentContainer();
    this.commonsService.setFormCreatorPlayground(true);
    window.removeEventListener('resize', (this.commonsService.resizeEditor as any));
  }

  setInitialState() {
    this.stateService.setState('fill-form');
    this.stateService.setDocumentType(this.form.documentType);
    this.documentType = this.form.documentType;
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
        this.toastr.success('Ha sido creado', form.title, {
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
    setTimeout(() => {
      if (window.innerWidth > 885) {
        if ((document.querySelector('#form-creator') as HTMLElement) !== null) {
          const newHeight = (window.innerHeight - (document.getElementsByTagName('nav')[0].clientHeight + document.querySelector('.sub-menu').clientHeight)) + 'px';
  
          (document.querySelector('#form-creator') as HTMLElement).style.height = newHeight;
        }
      }
    }, 100);
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, false);
  }

  setDocument() {

    this.commonsService.toggleSpinner();
    if (this.form.documentType === 'office') {
      this.setDivHeight();
      this.documentService = this.odfCreatorService;
      this.documentService.init('fillForm', this.form.text, 'editorContainer').then( data => {
        this.commonsService.setFormCreatorPlayground(false);
        this.commonsService.resizeEditor(true);
        window.addEventListener('resize', (this.commonsService.resizeEditor as any));
        this.documentService.resizeDocumentContainer();
        this.commonsService.toggleSpinner();
        this.documentService.setDragAndDropForSetUp();
        this.stepModelService.init(this.form.fields, this.documentType);
        this.stepModelService.setInitialState();
      });
    } else {
      this.documentService = this.plainTextCreatorService;
      this.documentService.init('editor-container', 'editor-preview');
      this.documentService.setQuillText(this.form.text);
      this.commonsService.setFormCreatorPlayground(false);
      this.commonsService.resizeEditor(true);
      window.addEventListener('resize', (this.commonsService.resizeEditor as any));
      this.documentService.resizeDocumentContainer();
      this.setDivHeight();
      this.stepModelService.init(this.form.fields, this.documentType);
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
    if (this.progressBar && this.currentStep) {
      const oldPercentage = Math.round(((this.currentStep / (this.form.fields.length + 1)) * 100));
      const currentPercentage = parseInt(this.progresBarPercentage, 10);
      const difference = (oldPercentage > currentPercentage) ? (oldPercentage - currentPercentage) : (currentPercentage - oldPercentage);
      for (let i = 0; i < difference + 1; i++) {
        setTimeout(() => {
          const newPercentage = (oldPercentage > currentPercentage) ? (currentPercentage + i) : (currentPercentage - i)
          this.progressBar.nativeElement.style.width = newPercentage + '%';
          this.progresBarPercentage = newPercentage + '%';
        }, 10 * i);
      }
    } else {
      this.progresBarPercentage = Math.round(((this.currentStep / (this.form.fields.length + 1)) * 100)) + '%';
    }
  }

  previewDocumentButton(setDocumentVisible: boolean) {
    this.commonsService.previewDocumentButton(setDocumentVisible);
    if (this.form.documentType === 'office') {
      this.documentService.resizeEvent();
    }
  }

  downloadWord() {
    this.documentService.downloadWord(this.form.slug, this.form.uri);
  }

  downloadPdf() {
    this.documentService.downloadPdf(this.form.slug, this.form.uri);
  }

  downloadHtml() {
    const blob = new Blob([this.automatikDocDiv.nativeElement.outerHTML], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.form.slug}.html`;
    a.click();
  }

  downloadTxt() {
    const blob = new Blob([this.automatikDocDiv.nativeElement.textContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.form.slug}.txt`;
    a.click();
  }
}
