import { Injectable } from '@angular/core';
import { CommonsService } from '../http';

@Injectable()
export class PlainTextCreatorService {

  public editorDiv: any;
  public previewTextDiv: any;
  public quillText: string;

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
    }];
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

  setPreview(quillText: string = '') {
    document.getElementById(this.editorDiv).classList.replace('d-block', 'd-none');
    document.getElementById(this.previewTextDiv).classList.replace('d-none', 'd-block');
    this.quillText = quillText;
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  unsetPreview() {
    document.getElementById(this.editorDiv).classList.replace('d-none', 'd-block');
    document.getElementById(this.previewTextDiv).classList.replace('d-block', 'd-none');
  }

  setQuillText(quillText: string) {
    this.quillText = quillText;
  }

  /************************/
  /* INDICATIONS */
  /************************/
  showIndicationInsideText(wordToReplace: string, indications: string) {
    const aTags = document.querySelector('#editor-preview').getElementsByTagName('*');
    let element: any;
    let scrollTop: number;
    for (let i = 0; i < aTags.length; i++) {
        if (aTags[i].getAttribute('data-identifier') === wordToReplace) {
          element = aTags[i];
          scrollTop = document.querySelector('#editor-preview').scrollTop;
          element.scrollIntoView({ behavior: 'smooth' });
          break;
        }
    }

    let scrollTimeout: any;
    const scrollListenner = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
          displayIndicator();
          document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
      }, 100);
    };

    document.querySelector('#editor-preview').addEventListener('scroll', scrollListenner);
    // If it is not scrolling
    setTimeout(() => {
        if (scrollTop === document.querySelector('#editor-preview').scrollTop) {
            displayIndicator();
            document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
        }
    }, 100);

    const displayIndicator = () => {
        const para = document.createElement('div');
        para.innerHTML = `<div class="indicator-content" style="margin:auto;width:95%">
                            <button id="close-indication">&#10006;</button>
                            <span style="width: 100%;">${indications}
                            </span>
                        </div>`;

        para.style.top = (
            (element.getBoundingClientRect().top)
            + (window.innerHeight / 100 * 4)) + 'px';
        para.style.left = document.querySelector('#editor-preview').getBoundingClientRect().left + 'px';
        para.style.width = document.querySelector('#editor-preview').clientWidth + 'px';
        para.classList.add('indicator');
        para.style.position = 'absolute';
        para.classList.add('smooth-intro');
        element.appendChild(para);
        window.addEventListener('click', removeIndication);

        function removeIndication(e: any) {
            if (e.target.classList.contains('icon-info-circle-solid')
            || e.target.classList.contains('indication')) {
                if (document.querySelectorAll('.indicator').length >= 2) {
                    para.parentNode.removeChild(para);
                    window.removeEventListener('click', removeIndication);
                }
            } else {
                para.parentNode.removeChild(para);
                window.removeEventListener('click', removeIndication);
            }
        }
      };
  }
  /*****************************/
  /*END OF INDICATIONS**********/
  /*****************************/

  buildDocument(steps: any) {
    const textPreview = this.replacements(steps);

    const textPreviewDiv = document.getElementById(this.previewTextDiv);
    while (textPreviewDiv.firstChild) {
      textPreviewDiv.removeChild(textPreviewDiv.firstChild);
    }
    textPreviewDiv.insertAdjacentHTML('beforeend', `<div class="ql-editor">${textPreview}</div>`);
    this.scrollToElement();
  }

  replacements(steps: any) {
    let textPreview: string = this.quillText;
    steps.forEach((step: any) => {
      if (step.type === 'iText' || step.type === 'iRadioA' || step.type === 'iRadioB') {
        const replacement =
        `<mark id="${step.isFocused ? 'focused' : ''}" data-identifier="${step.wordToReplace}">${step.replacement}</mark>`;
        textPreview = textPreview.replace(step.wordToReplace, replacement);
      } else if (step.type === 'iRadioC') {
        // this.buildForRadioC(step);
      } else if (step.type === 'iCheckbox') {
        // this.buildForCheckbox(step);
      } else if (step.type === 'iForEach') {
        // this.buildForEach(step);
      }
    });
    return textPreview;
  }

  scrollToElement() {
    const focusedElement = document.getElementById('focused');
    if (focusedElement) {
      focusedElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
