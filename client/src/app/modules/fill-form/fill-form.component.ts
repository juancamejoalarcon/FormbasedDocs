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
    this.formBasedDocDiv.nativeElement.innerHTML = '';
    this.generatedText = this.form.text;
  //   // Save user form settings
    const newFieldsToSave = [];

    for (const field of this.fields) {
  //     // TEXT
      if (field['type'] === 'iText') {
        const id = '#' + field['referenceNumber'];
        const regexp = new RegExp(field['referenceNumber'], 'g');
        const focused = this.formAreaDiv.nativeElement.querySelector(id) === document.activeElement;
        let valueToInsert: any;
        if (focused) {
          valueToInsert = '<mark id="focused">' + this.formAreaDiv.nativeElement.querySelector(id).value + '</mark>';
        } else {
         valueToInsert = '<mark>' + this.formAreaDiv.nativeElement.querySelector(id).value + '</mark>';
        }
        this.generatedText = this.generatedText.replace(regexp, valueToInsert);
        // Save user form settings
        field['value'] = this.formAreaDiv.nativeElement.querySelector(id).value;
      }
  //     // DATE
  //     // if (field['type'] === 'iDate') {
  //     //   const id = '#' + field['referenceNumber'];
  //     //   const regexp = new RegExp(field['referenceNumber'], 'g');
  //     //   const valueToInsert = '<mark>' + this.formAreaDiv.nativeElement.querySelector(id).value + '</mark>';
  //     //   this.generatedText = this.generatedText.replace(regexp, valueToInsert);
  //     //   // Save user form settings
  //     //   field['value'] = this.formAreaDiv.nativeElement.querySelector(id).value;
  //     // }
  //     // RADIO A
      if (field['type'] === 'iRadioA') {
        const radios = this.formAreaDiv.nativeElement.querySelectorAll('.' + field.referenceNumber);
        // We check the radio button selected and save the value in a variable
        for (let i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            const regexp = new RegExp(field['referenceNumber'], 'g');
            const focused = radios[i] === document.activeElement;
            let valueToInsert: any;
            if (focused) {
              valueToInsert = '<mark id="focused">' + [radios[i].value] + '</mark>';
            } else {
             valueToInsert = '<mark>' + [radios[i].value] + '</mark>';
            }
            this.generatedText = this.generatedText.replace(regexp, valueToInsert);
            field['value'] = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
      }
  //     // RADIO B
  //     if (field['type'] === 'iRadioB') {
  //       const radios = this.formAreaDiv.nativeElement.querySelectorAll('.' + field.referenceNumber);
  //       // We check the radio button selected and save the value in a variable
  //       for (let i = 0, length = radios.length; i < length; i++) {
  //         if (radios[i].checked) {
  //           const regexp = new RegExp(field['referenceNumber'], 'g');
  //           const focused = radios[i] === document.activeElement;
  //           let valueToInsert: any;
  //           if (focused) {
  //             valueToInsert = '<mark id="focused">' + [radios[i].value] + '</mark>';
  //           } else {
  //            valueToInsert = '<mark>' + [radios[i].value] + '</mark>';
  //           }
  //           this.generatedText = this.generatedText.replace(regexp, valueToInsert);
  //           field.radios[i]['checked'] = true;
  //           // only one radio can be logically checked, don't check the rest
  //         } else {
  //           field.radios[i]['checked'] = false;
  //         }
  //       }
  //     }
  //     // RADIO C
  //     if (field['type'] === 'iRadioC') {
  //       const radios = this.formAreaDiv.nativeElement.querySelectorAll('.' + field.referenceNumber);
  //       // We check the radio button selected and save the value in a variable
  //       for (let i = 0, length = radios.length; i < length; i++) {
  //         field.radios[i]['data-contentToExport'] = radios[i].getAttribute('data-contentToExport');
  //         if (radios[i].checked) {
  //           const regexp = new RegExp(field['referenceNumber'], 'g');
  //           const focused = radios[i] === document.activeElement;
  //           let valueToInsert: any;
  //           if (focused) {
  //             valueToInsert = '<mark id="focused">' + [radios[i].getAttribute('data-texto')] + '</mark>';
  //           } else {
  //            valueToInsert = '<mark>' + [radios[i].getAttribute('data-texto')] + '</mark>';
  //           }
  //           this.generatedText = this.generatedText.replace(regexp, valueToInsert);
  //           field.radios[i]['checked'] = true;
  //         } else {
  //           field.radios[i]['checked'] = false;
  //         }
  //       }
  //     }
      // Save user form settings
      newFieldsToSave.push(field);
    }
    // Save user form settings
    this.form.fields = newFieldsToSave;
    this.formBasedDocDiv.nativeElement.insertAdjacentHTML('beforeend', this.generatedText);
    const focusedElement = document.getElementById('focused');
    if (focusedElement) {
      focusedElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  submitForm() {
    // Saves author Form
    this.generateText();
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

  // enableFullScreen(id: string) {
  //   const el = document.getElementById(id);
  //   if (screenfull && screenfull.enabled) {
  //     screenfull.request(el);
  //   }
  // }

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
