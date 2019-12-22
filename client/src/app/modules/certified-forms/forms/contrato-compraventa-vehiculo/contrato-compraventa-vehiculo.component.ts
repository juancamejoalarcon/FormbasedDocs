import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  CommonsService,
  FormService,
  CheckoutService,
  Form
} from '../../../../core';
import {
  StepsService,
  DocCreatorService,
  SharedService
} from '../../shared';
import * as stepsImport from './steps';

@Component({
  selector: 'app-contrato-compraventa-vehiculo',
  templateUrl: './contrato-compraventa-vehiculo.component.html'
})
export class ContratoCompraventaVehiculoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalEnd') modalEnd: ElementRef;
  @ViewChild('modalDownload') modalDownload: ElementRef;
  @ViewChild('modalIndication') modalIndication: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  public form: Form = new Form();
  public currentStep = 0;
  public progresBarPercentage = '0%';
  public steps: any = stepsImport.steps;
  public formAlreadyPaid = false;
  public indications: any = {
    areIndications: true,
    indicationsType: 'outsideText',
    value: '',
  };
  public inputInvalid = false;

  constructor(
    private stepModelService: StepsService,
    private commonsService: CommonsService,
    private sharedService: SharedService,
    private documentCreatorService: DocCreatorService,
    private formsService: FormService,
    private toastr: ToastrService,
    private checkoutService: CheckoutService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.commonsService.toggleSpinner();
    this.route.queryParams.subscribe(params => {
      if (params.transactionId) {
        this.formAlreadyPaid = true;
        this.formsService.getPaidCertifiedForm(params.transactionId).subscribe((data: any) => {
          if (data.certifiedForm) {
            const certifiedForm = data.certifiedForm;
            this.form.fields = JSON.parse(certifiedForm.fields);
            this.form.title = certifiedForm.title;
            this.form.uri = certifiedForm.uri;
            this.form.id = 'contrato-compraventa-vehiculo';
            this.form.amount = certifiedForm.amount;
            this.form.topLabelTitle = certifiedForm.topLabelTitle;
            this.setInitiaState();
          } else if (data.transactionNotFound) {
            this.commonsService.toastMessage('error', 'Transaction Id does not exist', 'Transaction id not found');
          } else if (data.formExpired) {
            this.commonsService.toastMessage('error', 'The period of 30 days to change the document has expired', 'Transaction expired');
          }
        });
      } else {
        if (window.sessionStorage['Contrato de Arras Penitenciales']) {
          this.form = JSON.parse(window.sessionStorage['Contrato de Arras Penitenciales']);
          this.steps = this.form.fields;
          this.formAlreadyPaid = this.form.alreadyPaid;

          this.setInitiaState();
        } else {
          this.formsService.getCertifiedForm('contrato-compraventa-vehiculo').subscribe(
            certifiedForm => {
              this.form.fields = this.steps;
              this.form.title = certifiedForm.title;
              this.form.uri = certifiedForm.uri;
              this.form.id = 'contrato-compraventa-vehiculo';
              this.form.amount = certifiedForm.amount;
              this.form.image = certifiedForm.image;
              this.form.topLabelTitle = certifiedForm.topLabelTitle;
              this.setInitiaState();
            } );
        }
      }
    });
  }

  ngAfterViewInit() {
    this.commonsService.resizeEditor(false);
  }

  ngOnDestroy() {
    this.documentCreatorService.destroy();
    window.removeEventListener('resize', this.commonsService.resizeEditor.bind(this));
  }

  setInitiaState() {
    this.stepModelService.init(this.form.fields);
    this.sharedService.setForm(this.form);
    this.form.fields.forEach((step: any, index) => {
      if (step.isCurrentStep) {
        this.currentStep = index;
        this.updateProgressBarPercentage();
        if (this.steps[this.currentStep].type === 'end' && this.steps[this.currentStep].checkoutProcess.isInited && !this.formAlreadyPaid) {
          this.toogleModal(this.modalEnd.nativeElement);
        }
      }
    });
    this.documentCreatorService.init(this.form.uri).then( data => {
      this.commonsService.resizeEditor(true);
      window.addEventListener('resize', this.commonsService.resizeEditor.bind(this));
      this.documentCreatorService.resizeDocumentContainer();
      this.stepModelService.buildDocument(false);
      if (!window.sessionStorage['Contrato de Arras Penitenciales']) {
        this.stepModelService.setInitialState();
      }
      this.commonsService.toggleSpinner();
    });
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  moveStep(type: string) {
    if (type === 'next') {
      if (this.validateBeforeNextStep(this.steps[this.currentStep])) {
        this.steps[this.currentStep].isCurrentStep = false;
        this.steps[this.currentStep + 1].isCurrentStep = true;
        this.currentStep += 1;
      }
    } else if (type === 'previous') {
      this.steps[this.currentStep].isCurrentStep = false;
      this.steps[this.currentStep - 1].isCurrentStep = true;
      this.currentStep -= 1;
    }
    this.updateProgressBarPercentage();

    if (this.steps[this.currentStep].type === 'end') {
      this.prepareForCheckout();
    }
  }

  validateBeforeNextStep(step: any) {
    if (step.mandatory) {
      if (step.replacement === '') {
        this.toastr.error('Form cannot be empty', 'Empty field', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
        this.inputInvalid = true;
        return false;
      } else {
        this.inputInvalid = false;
      }
    }
    return true;
  }

  updateProgressBarPercentage() {
    if (this.progressBar && this.currentStep) {
      const oldPercentage = Math.round(((this.currentStep / (this.steps.length - 1)) * 100));
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
      this.progresBarPercentage = Math.round(((this.currentStep / (this.steps.length - 1)) * 100)) + '%';
    }
  }

  showIndication() {
    const step = this.steps[this.currentStep];
    if (step.indications.areIndications) {
      if (step.indications.indicationsType === 'outsideText' || window.innerWidth < 885) {
        this.indications = step.indications;
        this.toogleModal(this.modalIndication.nativeElement);
      } else {
        this.documentCreatorService.showIndicationInsideText(step.wordToReplace, step.indications.value);
      }
    }
  }

  prepareForCheckout() {
    this.form.fields = this.steps;
    this.sharedService.setForm(this.form);
  }

  startCheckout() {
    this.steps[this.currentStep].checkoutProcess.isInited = true;
  }

  onFormPaid(certifiedForm: any) {
    this.formAlreadyPaid = true;
    this.form.alreadyPaid = true;
    this.form.uri = certifiedForm.uri;
    this.form.fields = JSON.parse(certifiedForm.fields);
    this.stepModelService.init(this.form.fields);
    this.documentCreatorService.destroy();
    this.sharedService.setForm(this.form);
    this.documentCreatorService.init(this.form.uri).then( inited => {
      this.commonsService.resizeEditor(true);
      window.addEventListener('resize', this.commonsService.resizeEditor.bind(this));
      this.stepModelService.buildDocument();
      // Save uri and send Email
      this.documentCreatorService.saveUri().then((uri: string) => {
        this.checkoutService.sendMail(certifiedForm.transactionId, uri).subscribe((data: any) => {
          console.log(data);
        });
      });
    });
  }

  previewDocumentButton(setDocumentVisible: boolean) {
    this.commonsService.previewDocumentButton(setDocumentVisible);
      this.documentCreatorService.resizeEvent();
  }

  onExitPayment() {
    this.toogleModal(this.modalEnd.nativeElement);
  }

  toogleCheckout() {
    if (!this.formAlreadyPaid) {
      this.toogleModal(this.modalEnd.nativeElement);
      this.startCheckout();
    } else {
      this.toogleModal(this.modalDownload.nativeElement);
    }
  }

  downloadWord() {
    this.documentCreatorService.downloadWord(this.form.id, this.form.uri);
  }

  downloadPdf() {
    this.documentCreatorService.downloadPdf(this.form.id, this.form.uri);
  }

}
