import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-indications',
  templateUrl: './indications.component.html'
})
export class IndicationsComponent implements OnInit {

  @ViewChild('indicationsDiv') indicationsDiv: ElementRef;
  @ViewChild('tab1') tab1: ElementRef;
  @ViewChild('tab2') tab2: ElementRef;
  @ViewChild('normalText') normalText: ElementRef;

  @Input() indications: any;
  @Output() sendIndications = new EventEmitter<any>();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  public quillText = '';
  public customOptions: any;
  public quillModules: any;

  constructor() { }

  ngOnInit() {
    this.quillConfig();
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

  openTab(tab: HTMLElement, button: HTMLElement) {
    this.indicationsDiv.nativeElement.querySelector('.new-modal-content__header__tabs__tab--active')
    .classList.toggle('new-modal-content__header__tabs__tab--active');
    [this.tab1, this.tab2].forEach( (element) => {
      element.nativeElement.style.display = 'none';
    });
    tab.style.display = 'block';
    button.classList.toggle('new-modal-content__header__tabs__tab--active');
  }

  changeIndicationsType(type: string) {
    this.indications.indicationsType = type;
    if (type === 'outsideText') {
      this.changeIndicationsValue(this.quillText);
    } else {
      this.changeIndicationsValue(this.normalText.nativeElement.value);
    }
  }

  changeIndicationsValue(value: string) {
    console.log(value);
    if (value && value !== '') {
      this.indications.value = value;
      this.indications.areIndications = true;
      this.sendIndications.emit(this.indications);
    } else {
      this.indications.areIndications = false;
      this.sendIndications.emit(this.indications);
    }
  }

}
