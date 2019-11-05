import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormService, UserService, CommonsService, ComponentInjectorService } from '../../core';
import { ToastrService } from 'ngx-toastr';
import { OdfEditorService } from '../../shared';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html'
})
export class FillFormComponent implements OnInit, AfterViewInit {

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


  constructor(
    private formsService: FormService,
    private userService: UserService,
    private commonsService: CommonsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private odfEditorService: OdfEditorService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        const form: Form = data.form;

        this.form = form;
        this.fields = form.fields;
        this.generatedText = form.text;
        this.state = form.type === 'Created' ? 'newUser' : 'editUser';
        if (form.type === 'Created') {
          this.form.originalSlug = form.slug;
          this.updatingForm = false;
        } else {
          this.updatingForm = true;
        }
        this.updateProgressBarPercentage();
        this.setEditorConfig();
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
      this.odfEditorService.closeAndDestroyEditor();
    }
  }

  ngAfterViewInit() {
    // this.setDivHeight();
    // window.addEventListener('resize', this.setDivHeight);
    //     // Force click so it can update the value
    // setTimeout( () => { this.formAreaDiv.nativeElement.click(); }, 10);
    // if (this.form.indications !== '' && this.state === 'newUser') {
    //   this.toggleModal();
    // }
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

  setEditorConfig() {
    this.commonsService.toggleSpinner();
    if (this.form.documentType === 'office') {
      this.odfEditorService.createEditorFromURI('fillForm', 'editorContainer', this.form.text);
      setTimeout(() => {
        this.odfEditorService.resizeDocumentContainer();
        window.addEventListener('resize', this.odfEditorService.resizeDocumentContainer);
        this.commonsService.toggleSpinner();
      }, 4000);
    } else {
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

  updateProgressBarPercentage() {
    this.progresBarPercentage = Math.round(((this.currentStep / this.form.fields.length) * 100)) + '%';
  }

}
