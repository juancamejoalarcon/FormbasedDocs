import { Injectable } from '@angular/core';
import { CommonsService } from '../http';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';

@Injectable()
export class OdfCreatorService {

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;
  public resizeEvent: any;
  public idOfContainer: any;

  constructor(
    private commonsService: CommonsService,
  ) { }

  init(formType: string, uri: string = '', idOfContainer: string) {
    this.commonsService.toggleSpinner();
    console.log(uri);
    if (uri !== '') {
      this.createEditorFromURI(formType, idOfContainer, uri);
    } else {
      FormBasedDocsApi.createEditor(formType, idOfContainer);
    }
      return new Promise((resolve, reject) => {
        const checkIfEditorCreated = setInterval( () => {
          if (
            document.getElementsByTagName('office:text').length &&
            window['editor'].getEditorSession() &&
            window['editor'].getEditorSession().getOdfCanvas()
            ) {
            this.originalDocumentBodyClone = document.getElementById(idOfContainer).getElementsByTagName('office:text')[0].cloneNode(true);
            this.idOfContainer = idOfContainer;
            this.resizeDocumentContainer();
            this.commonsService.toggleSpinner();
            clearInterval(checkIfEditorCreated);
            resolve("Document ready");
            console.log('Document is ready');
          }
       }, 300);
      })
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
      FormBasedDocsApi.documentToFitScreen();
    };
    window.addEventListener('resize', this.resizeEvent);
    FormBasedDocsApi.documentToFitScreen();
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
    });
  }

}
