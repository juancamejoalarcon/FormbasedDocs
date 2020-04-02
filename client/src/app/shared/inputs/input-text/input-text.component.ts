import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  CommonsService,
  StepModelService,
  StateService,
  OdfCreatorService,
  PlainTextCreatorService
} from '../../../core';
/*new form*/
import { InputTextStep } from './input-text.interface';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent implements OnInit, OnDestroy {

  @Input() field: any;
  @ViewChild('delete', {static: false}) delete: ElementRef;
  @ViewChild('draggableText', {static: false}) draggableText: ElementRef;
  @ViewChild('changeIdInput', {static: false}) changeIdInput: ElementRef;
  @ViewChild('rightMenu', {static: false}) rightMenu: ElementRef;
  @ViewChild('rightMenuButton', {static: false}) rightMenuButton: ElementRef;
  @ViewChild('showModalButton', {static: false}) showModalButton: ElementRef;
  @ViewChild('modal', {static: false}) modal: ElementRef;
  @ViewChild('modalIndication', {static: false}) modalIndication: ElementRef;
  @ViewChild('divWhereIsDeleteButton', {static: true}) divWhereIsDeleteButton: ElementRef;

  public state: string;
  public documentType: string;
  public documentService: any;
  public isNewForm: boolean;
  public question: string;
  public mandatory = false;
  public referenceNumber: any;
  public functionReference: any;
  public step: InputTextStep;
  public indications = {
    areIndications: false,
    indicationsType: 'outsideText',
    value: ''
  };

  constructor(
    private commonsService: CommonsService,
    private stepModelService: StepModelService,
    private stateService: StateService,
    private odfCreatorService: OdfCreatorService,
    private plainTextCreatorService: PlainTextCreatorService
    ) { }

  ngOnInit() {
    this.documentType = this.stateService.getDocumentType();
    if (!this.field) {
      this.createStep();
      this.getRandomId();
      this.isNewForm = true;
    } else {
      this.step = this.field;
      this.isNewForm = false;
      this.mandatory = this.step.mandatory;
      this.indications = this.step.indications;
      this.question = this.step.question;
      if (this.step.identifier) {
        this.referenceNumber = this.step.identifier;
      } else {
        this.getRandomId();
      }
    }
    this.stateService.stateSubscribe().subscribe( (state: string) => {
      this.state = state;
      if (this.state === 'create-form') {
        this.step.replacement = '';
        this.divWhereIsDeleteButton.nativeElement.hidden = false;
      } else {
        this.divWhereIsDeleteButton.nativeElement.hidden = true;
      }
    });
    if (this.documentType === 'plain') {
      this.documentService = this.plainTextCreatorService;
    } else if (this.documentType === 'office') {
      this.documentService = this.odfCreatorService;
    }
  }

  ngOnDestroy() {
    let steps = this.stepModelService.getStepsModel();
    steps = steps.filter(step => step !== this.step);
    this.stepModelService.init(steps, this.documentType);
    this.stepModelService.removeStep();
  }

  /**NEW FORM**/
  createStep() {
    this.step = {
      type: 'iText',
      identifier: '',
      wordToReplace: '',
      replacement: '',
      question: '',
      indications: this.indications,
      mandatory: false,
      isFocused: false
    };
    this.indications = this.step.indications;
    this.stepModelService.addNewStep(this.step);
  }

  onQuestionChanged(value: string) {
    this.step.question = value;
  }

  getRandomId() {
    // I add a character so that when we query the id without the inputTex it works
    this.referenceNumber = 'i' + Math.random().toString(36).substring(7);
    this.step.identifier = this.referenceNumber;
    this.step.wordToReplace = this.referenceNumber;
  }

  changeId(e: any) {
    let newValue = e.target.value;
    if (newValue[0] !== 'i') {
      newValue = 'i' + newValue;
      this.changeIdInput.nativeElement.value = newValue;
    }
    if (newValue.length > 10) {
      newValue = newValue.substring(0, 10);
      this.changeIdInput.nativeElement.value = newValue;
    }
    this.referenceNumber = newValue;
    this.step.identifier = 'iText' + this.referenceNumber;
    this.step.wordToReplace = this.referenceNumber;
    this.enableDrag();
  }
  /************/

  enableDrag() {
    this.commonsService.enableDrag(this.draggableText.nativeElement, this.referenceNumber);
  }

  showChangeIdInputField() {
    if (this.draggableText.nativeElement.style.display === 'none') {
      this.draggableText.nativeElement.style.display = 'inline';
      this.changeIdInput.nativeElement.style.display = 'none';
      if (this.changeIdInput.nativeElement.value === 'i') {
        this.getRandomId();
        this.enableDrag();
      }
    } else {
      this.draggableText.nativeElement.style.display = 'none';
      this.changeIdInput.nativeElement.style.display = 'inline';
      this.changeIdInput.nativeElement.focus();
    }
  }

  showRightMenu() {
    if ( this.rightMenu.nativeElement.style.display !== 'block') {
      this.rightMenu.nativeElement.style.display = 'block';
      this.rightMenu.nativeElement.classList.add('smooth-intro');
      this.functionReference = this.hideMenuRight.bind(this);
      setTimeout( () => {
        window.addEventListener('click', this.functionReference);
      }, 200);
    }
  }

  hideMenuRight(e: any) {
    if (this.rightMenu.nativeElement.contains(event.target)) {
      if (event.target === this.showModalButton.nativeElement) {
        this.rightMenu.nativeElement.style.display = 'none';
        window.removeEventListener('click', this.functionReference);
        // this.toggleModal(false);
      }
    } else {
      this.rightMenu.nativeElement.style.display = 'none';
      window.removeEventListener('click', this.functionReference);
    }
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, false);
  }

  showIndication(e: any) {
    e.preventDefault();
    if (this.indications.indicationsType === 'outsideText') {
      this.commonsService.toggleModal(this.modalIndication.nativeElement);
    } else {
      this.documentService.showIndicationInsideText(this.step.wordToReplace, this.indications.value);
    }
  }

  onIndicationsChanged(indications: any) {
    this.step.indications = indications;
  }

  input(replacement: string) {
    console.log(this.step.wordToReplace);
    this.stepModelService.input(replacement, this.step.type, this.step.wordToReplace);
  }

  onMandatoryChange(mandatory: boolean) {
    this.step.mandatory = mandatory;
    this.mandatory = mandatory;
  }

  deleteDiv() {
    let steps = this.stepModelService.getStepsModel();
    steps = steps.filter(step => step !== this.step);
    this.stepModelService.init(steps, this.documentType);
    this.stepModelService.removeStep();
    this.delete.nativeElement.remove();
  }
}
