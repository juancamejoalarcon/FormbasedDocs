import { Injectable } from '@angular/core';
import { CommonsService } from '../http';

@Injectable()
export class PlainTextCreatorService {

  public editorDiv: any;
  public previewTextDiv: any;

  constructor(
    private commonsService: CommonsService
  ) { }

  init(editorDivId: any, previewDivId: any) {
    this.editorDiv = editorDivId;
    this.previewTextDiv = previewDivId;
  }

  quillModules() {

    return  {
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

  customOptions() {
    return [{
      import: 'formats/font',
      whitelist: ['roboto', 'times-new-roman', 'arial', 'lato', 'montserrat']
    }]
  }

  setAdditionalQuillButtons(quillElement: any) {
    const span = document.createElement('span');
    span.classList.add('ql-formats');
    const button = document.createElement('button');
    button.className = 'icon icon-expand-solid';
    button.addEventListener('click', () => {
      this.commonsService.enableFullScreen('editor-container');
    });
    span.appendChild(button);
    quillElement.querySelector('.ql-toolbar').appendChild(span);
  }

  setPreview() {
    document.getElementById(this.editorDiv).classList.replace('d-block', 'd-none');
    document.getElementById(this.previewTextDiv).classList.replace('d-none', 'd-block');
  }

  unsetPreview() {
    document.getElementById(this.editorDiv).classList.replace('d-none', 'd-block');
    document.getElementById(this.previewTextDiv).classList.replace('d-block', 'd-none');
  }

  buildDocument(steps: any) {
    console.log('---------');
    console.log(steps);
    console.log('---------');
  }
}
