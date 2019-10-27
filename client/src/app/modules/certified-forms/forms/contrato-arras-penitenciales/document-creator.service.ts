import { Injectable } from '@angular/core';
import { CommonsService } from '../../../../core';
import * as FormBasedDocsApi from '../../../../../assets/js/wodotexteditor/localfileeditor.js';
@Injectable()
export class DocumentCreatorService {

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;
  public resizeEvent: any;

  constructor(
    private commonsService: CommonsService,
  ) { }

  init(uri: any) {
    this.commonsService.toggleSpinner();
    this.createEditorFromURI('fillForm', 'editorContainer', uri);
      return new Promise((resolve, reject) => {
        const checkIfEditorCreated = setInterval( () => {
          if (
            window['editor'] &&
            window['editor'].getEditorSession() &&
            document.getElementsByTagName('office:text').length) {
            this.originalDocumentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
            this.resizeDocumentContainer();
            this.commonsService.toggleSpinner();
            clearInterval(checkIfEditorCreated);
            resolve("Document ready");
            console.log('Document is ready');
          }
       }, 300);
      });
  }

  destroy() {
    FormBasedDocsApi.closeAndDestroyEditor();
    window.removeEventListener('resize', this.resizeEvent);
  }

  createEditorFromURI(formType: string, idOfContainer: string = 'editorContainer', dataURI: string) {
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

  getEditorSession() {
    return FormBasedDocsApi.getEditorSession();
  }

  resizeDocumentContainer() {
    this.resizeEvent = () => {
      FormBasedDocsApi.documentToFitScreen();
    };
    window.addEventListener('resize', this.resizeEvent);
    FormBasedDocsApi.documentToFitScreen();
  }

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
      // setTimeout(() => {
      //   document.getElementById('webodfeditor-canvascontainer1').scrollBy(0, offset);
      // }, 500);
    }
  }
  /************************/
  /* INDICATIONS */
  /************************/
  /*****************************/
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
    }

    window.addEventListener('click', removeIndication);
    this.scrollToElementWithClass('indicator', para.offsetHeight);
  }
  /*END OF INDICATIONS**********/
  /*****************************/

  /************************/
  /* CHANGE DOC STRUCTURE */
  /************************/
  structuralChanges(steps: any) {
    // console.log(steps);
    steps.forEach((step: any) => {
      if (step.type === 'iRadioC') {
        this.buildForRadioC(step);
      } else if (step.type === 'iCheckbox') {
        this.buildForCheckbox(step);
      } else if (step.type === 'iForEach') {
        this.buildForEach(step);
      }
    });
  }

  buildForEach(step: any) {
    step.content.forEach((content: any) => {
      // Find paragrah
      const elementContainingWord = this.findword(content.wordToReplace);
      // Case where we just have the word, and nothing more
      if (elementContainingWord.textContent === content.wordToReplace) {
        // Reversed copy of the array so we inject elements in order
        const newarray = content.modifiedReplacements.slice().reverse();

        newarray.forEach((modifiedReplacement: any, index: number) => {
          let exactElementContainingWord: any;
          const regexp = new RegExp(step.wordToReplace, 'g');

          if (index !== content.modifiedReplacements.length - 1) {
            const elementContainingWordClone = elementContainingWord.cloneNode(true);
            elementContainingWord.parentNode.insertBefore(elementContainingWordClone, elementContainingWord.nextSibling);
            exactElementContainingWord = elementContainingWordClone;
          } else {
            exactElementContainingWord = elementContainingWord;
          }

          exactElementContainingWord = this.findExactContainingElement(step.wordToReplace, exactElementContainingWord);
          console.log(exactElementContainingWord);
          exactElementContainingWord.innerHTML = exactElementContainingWord.innerHTML.replace(regexp, modifiedReplacement);
        });

        const newarray2 = content.modifiedExtraReplacements.slice().reverse();
        newarray2.forEach((modifiedExtraReplacement: any, index: number) => {
          modifiedExtraReplacement.forEach((modifiedExtraReplacementArray: any) => {
            const elementContainingWord2 = this.findword(modifiedExtraReplacementArray[0].identifier);
            const newarray3 = modifiedExtraReplacementArray.slice().reverse();
            newarray3.forEach(((modifiedReplacement: any, indexNewArray3: number) => {
                let exactElementContainingWord2: any;
                const regexp = new RegExp(modifiedReplacement.identifier, 'g');

                if (indexNewArray3 !== modifiedExtraReplacementArray.length - 1) {
                  const elementContainingWordClone = elementContainingWord2.cloneNode(true);
                  elementContainingWord2.parentNode.insertBefore(elementContainingWordClone, elementContainingWord2.nextSibling);
                  exactElementContainingWord2 = this.findExactContainingElement(modifiedReplacement.identifier, elementContainingWordClone);
                } else {
                  exactElementContainingWord2 = this.findExactContainingElement(modifiedReplacement.identifier, elementContainingWord2);
                }
                exactElementContainingWord2.innerHTML = exactElementContainingWord2.innerHTML
                .replace(regexp, modifiedReplacement.replacement);
              }));

          });
        });
      }
    });
  }

  buildForRadioC(step: any) {
    let elementContainingWord = this.findword(step.wordToReplace);
    const regexp = new RegExp(step.wordToReplace, 'g');
    let replacement: string;
    step.radios.forEach((radio) => {
      if (radio.checked) {
        replacement = radio.replacement;
        step.extraReplacements.forEach((extraReplacement: any, index: any) => {
          const regexp2 = new RegExp(extraReplacement.wordToReplace, 'g');
          const elementContainingReplacementWord = this.findword(extraReplacement.wordToReplace);
          const exactElementContainingReplacementWord =
          this.findExactContainingElement(extraReplacement.wordToReplace, elementContainingReplacementWord);
          let replacement2: any;
          radio.extraReplacements.forEach((radioExtraReplacement: any) => {
            if (radioExtraReplacement.insideId === extraReplacement.insideId) {
              // console.log(radioExtraReplacement);
              replacement2 = radioExtraReplacement.replacement;
            }
          });
          exactElementContainingReplacementWord.innerHTML = exactElementContainingReplacementWord.innerHTML
          .replace(regexp2, replacement2);
        });
      }
    });
    // // Case where we have just one paragraph with the wordToReplace
    // if (elementContainingWord.children.length === 1) {
    //   elementContainingWord.firstChild.innerHTML = replacement;
    // } else {
    //   while (elementContainingWord.firstElementChild) {
    //     elementContainingWord = elementContainingWord.firstElementChild;
    //   }
    //   elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
    // }
    while (elementContainingWord.firstElementChild) {
        elementContainingWord = elementContainingWord.firstElementChild;
      }
    elementContainingWord.innerHTML = elementContainingWord.innerHTML.replace(regexp, replacement);
  }

  buildForCheckbox(step: any) {
    const elementContainingWord = this.findword(step.wordToReplace);
    let replacement = step.replacement;
    step.checkboxes.forEach((checkbox) => {
      // Check if it contains the word (rules)
      if (step.replacement.includes(checkbox.wordToReplace)) {
        if (checkbox.checked) {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, checkbox.replacement);
        } else {
          const regexp = new RegExp(checkbox.wordToReplace, 'g');
          replacement = replacement.replace(regexp, '');
        }
      }
    });
    // Case where we have just one paragraph with the wordToReplace
    if (elementContainingWord.innerHTML === step.wordToReplace) {
      elementContainingWord.innerHTML = replacement;
    }
  }
  /*****************************/
  /*END OF CHANGE DOC STRUCTURE*/
  /*****************************/

  replacements(steps: any) {
    steps.forEach((step: any) => {
      if (step.type === 'iText' || step.type === 'iDate') {
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
          console.log(elementContainingWord);
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
