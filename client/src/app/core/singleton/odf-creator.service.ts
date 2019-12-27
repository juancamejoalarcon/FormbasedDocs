import { Injectable } from '@angular/core';
import { CommonsService } from '../http';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';

@Injectable()
export class OdfCreatorService {

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;
  public resizeEvent: any;
  public idOfContainer: any;
  public reader = new FileReader();

  constructor(
    private commonsService: CommonsService,
  ) { }

  init(formType: string, uri: string = '', idOfContainer: string) {
    this.commonsService.toggleSpinner();
    if (uri !== '') {
      this.createEditorFromURI(formType, idOfContainer, uri);
    } else {
      FormBasedDocsApi.createEditor(formType, idOfContainer);
    }
      return new Promise((resolve, reject) => {
        const checkIfEditorCreated = setInterval( () => {
          if (
            window['editor'] &&
            window['editor'].getEditorSession() &&
            document.getElementsByTagName('office:text').length) {
              this.originalDocumentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
              this.idOfContainer = idOfContainer;
              clearInterval(checkIfEditorCreated);
              this.commonsService.toggleSpinner();
              resolve("Document ready");
          }
       }, 300);
      });
  }

  closeAndDestroyEditor() {
    FormBasedDocsApi.closeAndDestroyEditor();
    window.removeEventListener('resize', this.resizeEvent);
  }

  createEditorFromURI(formType: string, idOfContainer: string, dataURI: string) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], {type: mimeString});
    const url = URL.createObjectURL(blob);
    window['DOCUMENTOURL'] = url;
    FormBasedDocsApi.createEditor(formType, idOfContainer);
  }

  resizeDocumentContainer() {
    this.resizeEvent = () => {
      // Fix weird behaviour in Chrome
      setTimeout(() => {
        document.getElementById('webodfeditor-editor1').style.height = document.getElementById('text-area').clientHeight + 'px';
        document.getElementById('webodfeditor-editor1').style.width = document.getElementById('text-area').clientWidth + 'px';
        FormBasedDocsApi.documentToFitScreen();
      }, 10);
    };
    window.addEventListener('resize', this.resizeEvent);
    FormBasedDocsApi.documentToFitScreen();
  }

  destroyResizeDocumentContainer() {
    window.removeEventListener('resize', this.resizeEvent);
  }

  // DRAG AND DROP
  setCursorPositionForDragAndDrop(e: any) {
    FormBasedDocsApi.setCursorPositionForDragAndDrop(e);
  }
  setDragAndDropForSetUp() {
    // Dragover
    document.getElementById(this.idOfContainer).getElementsByTagName('office:text')[0].addEventListener('dragover', (event) => {
        event.preventDefault();
        this.setCursorPositionForDragAndDrop(event);
    });
    // Drop
    document.getElementsByTagName('office:text')[0].addEventListener('drop', (event) => {
      this.setCursorPositionForDragAndDrop(event);
      const cursorNode = document.getElementsByTagName('office:text')[0].getElementsByTagName('cursor')[0];
      cursorNode.parentNode.childNodes.forEach((element, index) => {
          if (element['tagName'] === 'cursor') {
              if (cursorNode.parentNode.childNodes[index + 1] !== undefined) {
                  // Si es un espacio usamos un div anterior, porque no lo detecta
                  if (cursorNode.parentNode.childNodes[index + 1]['tagName'] == 'text:s') {
                      const textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                      cursorNode.parentNode.insertBefore(textContent, cursorNode.nextSibling);
                  } else {
                      cursorNode.parentNode.childNodes[index + 1].textContent = 
                      event['dataTransfer'].getData('text') + cursorNode.parentNode.childNodes[index + 1].textContent;
                  }
              } else {
                  const textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                  cursorNode.parentNode.insertBefore(textContent, cursorNode);
              }
          }
      });
      this.refreshAndReload(event);
    });
  }

  refreshAndReload(event: any) {
    this.commonsService.toggleSpinner();
    FormBasedDocsApi.getEditor().getDocumentAsByteArray((err: any, data: any) => {
      if (err) {
        alert(err);
        this.commonsService.toggleSpinner();
        return;
      }
      // TODO: odfcontainer should have a property mimetype
      const mimetype = 'application/vnd.oasis.opendocument.text';
      const blob = new Blob([data.buffer], {type: mimetype});
      window['ODTDOCUMENT'] = blob;
      FormBasedDocsApi.getEditor().closeDocument(() => {
        FormBasedDocsApi.getEditor().openDocumentFromUrl(URL.createObjectURL(blob), () => {
          this.setDragAndDropForSetUp();
          this.commonsService.toggleSpinner();
          // If caret goes back to begining this needs to be fired after load
          this.setCursorPositionForDragAndDrop(event);
        });
      });
    });
  }

  getDocumentToSave() {
    return new Promise((resolve, reject) => {
      FormBasedDocsApi.getEditor().getDocumentAsByteArray((err: any, data: any) => {
        if (err) {
          alert(err);
          this.commonsService.toggleSpinner();
          return;
        }
        // TODO: odfcontainer should have a property mimetype
        const mimetype = 'application/vnd.oasis.opendocument.text';
        const blob = new Blob([data.buffer], {type: mimetype});
        this.reader.readAsDataURL(blob);
        this.reader.onloadend = () => {
          resolve(this.reader.result as string);
        };
      });
    });
  }

  setPreview(htmlText: string = '') {
    this.commonsService.toggleSpinner();
    FormBasedDocsApi.getEditor().getDocumentAsByteArray((err: any, data: any) => {
      if (err) {
        alert(err);
        this.commonsService.toggleSpinner();
        return;
      }
      // TODO: odfcontainer should have a property mimetype
      const mimetype = 'application/vnd.oasis.opendocument.text';
      const blob = new Blob([data.buffer], {type: mimetype});
      window['ODTDOCUMENT'] = blob;
      this.reader.readAsDataURL(blob);
      this.reader.onloadend = () => {
        FormBasedDocsApi.getEditor().closeAndDestroyEditor(() => {
          this.init('fillForm', this.reader.result as string, this.idOfContainer).then(() => {
            this.commonsService.toggleSpinner();
          });
        });
      };
    });
  }

  unsetPreview() {
    this.commonsService.toggleSpinner();
    return new Promise((resolve, reject) => {
      FormBasedDocsApi.getEditor().closeAndDestroyEditor(() => {
        this.init('createForm', this.reader.result as string, this.idOfContainer).then(() => {
          this.setDragAndDropForSetUp();
          this.commonsService.toggleSpinner();
          resolve('Exit preview');
        });
      });
    });
  }

  /************************/
  /* INDICATIONS */
  /************************/
  showIndicationInsideText(wordToReplace: string, indications: string) {
    const elementContainingWord = document.querySelector(`[data-identifier=${wordToReplace}]`);
    const para = document.createElement('div');
    para.innerHTML = `<div class="indicator-content not-selectable">
                        <button id="close-indication">&#10006;</button>
                        <span class="not-selectable" style="margin:auto; width:100%">${indications}
                        </span>
                    </div>`;
    para.style.top = elementContainingWord.getBoundingClientRect().top.toString();
    para.style.left = elementContainingWord.getBoundingClientRect().left.toString();
    para.classList.add('indicator');
    para.classList.add('smooth-intro');
    para.classList.add('not-selectable');
    elementContainingWord.appendChild(para);

    const removeIndication = (e: any) => {
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
    };

    window.addEventListener('click', removeIndication);
    this.scrollToElementWithClass('indicator', para.offsetHeight);
  }
  /*****************************/
  /*END OF INDICATIONS**********/
  /*****************************/

  buildDocument(steps: any) {
    this.currentDocumentBodyClone = this.originalDocumentBodyClone.cloneNode(true);
    // 1.- Change doc structure
    this.structuralChanges(steps);
    // 2.- Change values
    this.replacements(steps);

    document.getElementsByTagName('office:text')[0].parentElement.replaceChild(
      this.currentDocumentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]
    );
    this.scrollToElementWithClass('focused');
  }

  scrollToElementWithClass(className: any, offset = 0) {
    const element = document.querySelector('.' + className);
    if (element) {
      element.parentElement
      .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }

  /************************/
  /* CHANGE DOC STRUCTURE */
  /************************/
  structuralChanges(steps: any) {
    // console.log(steps);
    steps.forEach((step: any) => {
      if (step.type === 'iRadioC') {
        // this.buildForRadioC(step);
      } else if (step.type === 'iCheckbox') {
        // this.buildForCheckbox(step);
      } else if (step.type === 'iForEach') {
        // this.buildForEach(step);
      }
    });
  }
  /*****************************/
  /*END OF CHANGE DOC STRUCTURE*/
  /*****************************/

  replacements(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iText' || step.type === 'iDate' || step.type === 'iRadioA' || step.type === 'iRadioB') {
        const elementsContainingWord = this.findAllwords(step.wordToReplace);
        const regexp = new RegExp(step.wordToReplace, 'g');
        elementsContainingWord.forEach((elementContainingWord: any) => {
          let element = elementContainingWord;
          if (element.innerHTML !== step.wordToReplace) {
            // Find the innermost element containing the word
            element = this.findExactContainingElement(step.wordToReplace, element);
          }
          if (element) {
            element.innerHTML = element.innerHTML.replace(regexp,
            `<span class="${step.isFocused ? 'highlight focused' : ''}" data-identifier="${step.wordToReplace}">${step.replacement}</span>`);
          }
        });
      } else if (step.type === 'iRadioB') {
        const elementsContainingWord = this.findAllwords(step.wordToReplace);
        let replacement: any;
        const regexp = new RegExp(step.wordToReplace, 'g');
        elementsContainingWord.forEach((elementContainingWord: any) => {
          step.radios.forEach((radio) => {
            if (radio.checked) {
              replacement = radio.replacement;
              let element = elementContainingWord;
              if (element.innerHTML !== step.wordToReplace) {
                // Find the innermost element containing the word
                element = this.findExactContainingElement(step.wordToReplace, element);
              }
              if (element) {
                element.innerHTML = element.innerHTML.replace(regexp,
                `<span class=" ${step.isFocused ? 'focused' : ''}" data-identifier="${step.wordToReplace}">${step.replacement}</span>`);
              }
            }
          });
        });
      }
    });
  }

  findword(wordToReplace: string, bodyClone: any = this.currentDocumentBodyClone) {
    // USE ARRAY FOR ALL VALUES
    const children = bodyClone.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (!this.elementIsExcluded(children[i])) {
        if (children[i].innerHTML.includes(wordToReplace) || children[i].textContent.includes(wordToReplace)) {
          return children[i];
        }
      }
    }
  }

  findAllwords(wordToReplace: string, bodyClone: any = this.currentDocumentBodyClone) {
    const allEelementsContainingWord = [];
    const children = bodyClone.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (!this.elementIsExcluded(children[i])) {
        if (children[i].innerHTML.includes(wordToReplace)) {
          allEelementsContainingWord.push(children[i]);
        }
      }
    }
    return allEelementsContainingWord;
  }

  findExactContainingElement(wordToReplace: string, bodyClone: any) {
    let element: any = bodyClone;
      while (element.childNodes && element.childNodes.length > 0 && element.innerHTML.includes(wordToReplace)) {
        element.childNodes.forEach(((el: any) => {
          if (el.nodeName !== '#text') {
            if (el.innerHTML.includes(wordToReplace)) {
              element = el;
            }
          } else {
            if (el.textContent.includes(wordToReplace)) {
              element = el;
            }
          }
        }));
      }
      if (element.nodeName === '#text') {
        element = element.parentNode;
      }
      return element;
    }
  
    elementIsExcluded(element: any) {
      const excludedElements = [
          'office:text',
          'text:sequence-decls',
          'text:sequence-decl',
          'draw:frame',
          'draw:image',
          'office:annotation',
          'office:annotation-end',
          'dc:creator',
          'dc:date'
      ];
      return excludedElements.includes(element.nodeName);
    }
}
