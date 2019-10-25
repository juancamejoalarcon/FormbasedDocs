import { Injectable } from '@angular/core';
import { CommonsService } from '../http';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';

@Injectable()
export class OdfCreatorService {

  public originalDocumentBodyClone: any;
  public currentDocumentBodyClone: any;
  public resizeEvent: any;

  constructor(
    private commonsService: CommonsService,
  ) { }

  init(uri: string = '', idOfContainer: string = 'editorContainer', formType: string) {
    this.commonsService.toggleSpinner();
    if (uri !== '') {
      this.createEditorFromURI(formType, idOfContainer, uri);
    } else {
      FormBasedDocsApi.createEditor(formType, idOfContainer);
    }
    //   return new Promise((resolve, reject) => {
    //     const checkIfEditorCreated = setInterval( () => {
    //       if (document.getElementsByTagName('office:text').length) {
    //         this.originalDocumentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
    //         this.resizeEvent = this.resizeDocumentContainer();
    //         window.addEventListener('resize', this.resizeEvent);
    //         this.commonsService.toggleSpinner();
    //         clearInterval(checkIfEditorCreated);
    //         resolve("Document ready");
    //         console.log('Document is ready');
    //       }
    //    }, 300);
    //   })
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

}
