import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef, ɵConsole } from '@angular/core';
import { CommonsService, StepModelService, StateService, OdfCreatorService } from '../../../core';
/*new form*/
import { iTextStep } from './input-text.interface';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() field: any;
  @ViewChild('delete') delete: ElementRef;
  @ViewChild('draggableText') draggableText: ElementRef;
  @ViewChild('changeIdInput') changeIdInput: ElementRef;
  @ViewChild('rightMenu') rightMenu: ElementRef;
  @ViewChild('rightMenuButton') rightMenuButton: ElementRef;
  @ViewChild('showModalButton') showModalButton: ElementRef;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalIndication') modalIndication: ElementRef;
  @ViewChild('divWhereIsDeleteButton') divWhereIsDeleteButton: ElementRef;

  public state: string;
  public isNewForm: boolean;
  public mandatory: boolean;
  public randomId: string;
  public referenceNumber: any;
  public functionReference: any;
  public step: iTextStep;
  public indications = {
    areIndications: false,
    indicationsType: 'outsideText',
    value: ''
  };

  constructor(
    private commonsService: CommonsService,
    private stepModelService: StepModelService,
    private stateService: StateService,
    private odfCreatorSerice: OdfCreatorService
    ) { }

  ngOnInit() {
    this.isNewForm = true;
    if (this.isNewForm) {
      this.createStep();
      this.getRandomId();
    }
    this.stateService.stateSubscribe().subscribe( (state: string) => {
      this.state = state;
      if (this.state === 'create-form') {
        this.divWhereIsDeleteButton.nativeElement.hidden = false;
      } else {
        this.divWhereIsDeleteButton.nativeElement.hidden = true;
      }
    });
  }

  ngAfterViewInit() {
    this.enableDrag();
  }

  ngOnDestroy() {
    let steps = this.stepModelService.getStepsModel();
    steps = steps.filter(step => step != this.step);
    this.stepModelService.init(steps);
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
      mandatory: true,
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
    this.step.identifier = 'iText' + this.referenceNumber;
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
    console.log(this.indications);
    if (this.indications.indicationsType === 'outsideText') {
      this.commonsService.toggleModal(this.modalIndication.nativeElement);
    } else {
      this.odfCreatorSerice.showIndicationInsideText(this.step.wordToReplace, this.indications.value);
    //   if (this.isPlainText()) {
    //     this.commonsService.showIndicationsInsideTextPlainText(this.referenceNumber, this.indications);
    //   } else {
    //     this.odfEditorService.showIndicationInsideText(this.referenceNumber, this.indications);
    //   }
    }
  }

  onIndicationsChanged(indications: any) {
    this.step.indications = indications;
  }

  input(replacement: string) {
    this.stepModelService.input(replacement, this.step.type, this.step.wordToReplace);
  }

  deleteDiv() {
    this.delete.nativeElement.remove();
  }
}
