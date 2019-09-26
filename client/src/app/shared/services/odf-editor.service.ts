import { Injectable } from '@angular/core';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';
import { CommonsService } from '../../core';

@Injectable()
export class OdfEditorService {

    public valuesToChange: Array<any>;
    public documentBodyClone: any;

    constructor (
        private commonsService: CommonsService
    ) {}

    createEditor(formType: string, idOfContainer: string = 'editorContainer') {
        FormBasedDocsApi.createEditor(formType, idOfContainer);
    }

    createEditorFromURI(formType: string, idOfContainer: string = 'editorContainer', dataURI: string) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        const byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to an ArrayBuffer
        const ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        const ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        const blob = new Blob([ab], {type: mimeString});

        // return URL
        const url = URL.createObjectURL(blob);
        window['DOCUMENTOURL'] = url;
        FormBasedDocsApi.createEditor(formType, idOfContainer);
    }

    resizeDocumentContainer() {
        FormBasedDocsApi.documentToFitScreen();
    }

    closeEditor() {
        FormBasedDocsApi.closeDocument();
    }

    closeAndDestroyEditor() {
        FormBasedDocsApi.closeAndDestroyEditor();
    }

    setCursorPositionForDragAndDrop(e: any) {
        FormBasedDocsApi.setCursorPositionForDragAndDrop(e);
    }

    saveForPreview() {
        FormBasedDocsApi.saveForPreview();
    }

    removeCursor() {
        FormBasedDocsApi.removeCursor();
    }

    loadPreview() {
        FormBasedDocsApi.loadPreview();
    }

    getEditorSession() {
        return FormBasedDocsApi.getEditorSession();
    }

    setDragAndDropForSetUp() {
        // Dragover
        document.getElementsByTagName('office:text')[0].addEventListener('dragover', (event) => {
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
            this.commonsService.toggleSpinner();
            setTimeout(() => {
                this.saveForPreview();
            }, 200);
            setTimeout(() => {
                this.saveForPreview();
                this.closeEditor();
                this.loadPreview();
            }, 800);
            setTimeout(() => {
                this.setDragAndDropForSetUp();
                this.commonsService.toggleSpinner();
            }, 1200);
        });
    }

    replaceWord(steps: any, documentBodyClone: any) {

        this.documentBodyClone = documentBodyClone;
        window['documentBodyCloneGlobal'] = documentBodyClone;
        // I replace the body of the document because, if not, after the first replacement it will not
        // be able to find the word again
        document.getElementsByTagName('office:text')[0]
            .parentElement
            .replaceChild(this.documentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]);

        // Find all the DOM elements where the word is located
        steps.forEach((step: any) => {
            console.log(step);
            if (step.type === 'inputText' || step.type === 'inputDate' || step.type === 'iText' || step.type === 'iRadioA') {
                this.valuesToChange = [];
                this.findword(
                    this.documentBodyClone.getElementsByTagName('*'),
                    document.getElementsByTagName('office:text')[0].getElementsByTagName('*'),
                    step.wordToReplace
                );
                this.valuesToChange.forEach((valueToChange: any) => {
                    const innerHTML = valueToChange.clone.parentElement.innerHTML;
                    const regexp = new RegExp(step.wordToReplace, 'g');
                    let innerHTMLreplaced: any;
                    if (step.isFocused) {
                        innerHTMLreplaced = innerHTML.replace(regexp,
                            `<span class="highlight focused" data-identifier="${step.wordToReplace}">${step.replacement}</span>`
                            );
                    } else {
                        innerHTMLreplaced = innerHTML.replace(regexp,
                            `<span class="highlight" data-identifier="${step.wordToReplace}">${step.replacement}</span>`
                            );
                    }
                    valueToChange.element.parentElement.innerHTML = innerHTMLreplaced;
                });
                this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);

            } else if (step.type === 'inputRadioC') {
                this.valuesToChange = [];
                this.findword(
                    this.documentBodyClone.getElementsByTagName('*'),
                    document.getElementsByTagName('office:text')[0].getElementsByTagName('*'),
                    step.wordToReplace
                );
                step.options.forEach((option: any) => {
                    if (option.checked) {
                        this.valuesToChange.forEach((valueToChange: any) => {
                            const innerHTML = valueToChange.clone.parentElement.innerHTML;
                            const regexp = new RegExp(step.wordToReplace, 'g');
                            let innerHTMLreplaced: any;
                            innerHTMLreplaced = innerHTML.replace(regexp,
                                `<span>${option.value}</span>`
                                );
                            valueToChange.element.parentElement.innerHTML = innerHTMLreplaced;
                        });
                    }
                });
                this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
            } else if (step.type === 'inputRange') {
                this.valuesToChange = [];
                this.findword(
                    this.documentBodyClone.getElementsByTagName('*'),
                    document.getElementsByTagName('office:text')[0].getElementsByTagName('*'),
                    step.id
                );
                const subSteps = [];
                let index = 1;
                while (steps[steps.indexOf(step) + index] !== undefined && steps[steps.indexOf(step) + index].isSubStep) {
                    subSteps.push(steps[steps.indexOf(step) + index]);
                    index++;
                }
                this.rangeReplacement(step.value, this.valuesToChange, subSteps);
                this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);

            }
        });

        this.scrollToElementWithClassFocus('focused');

    }

    scrollToElementWithClassFocus(className: any, offset = 0) {
        if (document.getElementsByClassName(className).length) {
            document.getElementsByClassName(className)[0]
            .parentElement
            .scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        
            setTimeout(() => {
                document.getElementById('webodfeditor-canvascontainer1').scrollBy(0, offset);
                }, 500);
            // Adjust scroll so it scrolls in div
            // document.getElementById('webodfeditor-canvascontainer1').scrollTo(0,
            //     ((document.getElementsByClassName('focused')[0].parentElement.parentElement.getBoundingClientRect().top +
            //     document.getElementById('webodfeditor-canvascontainer1').scrollTop) -
            //     document.getElementsByTagName('nav')[0].offsetHeight -
            //     document.getElementsByClassName('sub-menu')[0].clientHeight -
            //     document.getElementsByClassName('webodfeditor-toolbarcontainer')[0].clientHeight
            // ));
        }
    }

    showIndicationModal(word: String, documentBodyClone: any) {
        let element: any;
        findword(
            documentBodyClone.getElementsByTagName('*'),
            document.getElementsByTagName('office:text')[0].getElementsByTagName('*'),
            word
        );
        // change <p> to <label>
        let imgLabel: any;
        imgLabel = document.createElement("label");
        imgLabel.innerHTML = "Image ";
        imgLabel.style.left = element.parentElement.getBoundingClientRect().left + "px";
        imgLabel.style.top = element.parentElement.getBoundingClientRect().top + "px";
        // you don't need the next line ;)
        //imgLabel.style.top = "0px";
        imgLabel.style.color = "Black";
        imgLabel.style.position = "absolute";
        document.getElementsByTagName('office:text')[0].appendChild(imgLabel);
        // This functions traverses the DOM looking for the element that contains the word
        // in two objects, the clone original one and in the one we are going to replace the word
        function findword(cloneOfElements: any, elements: any, wordToReplace: any) {
            for (let i = 0; i < cloneOfElements.length; i++) {
                if (cloneOfElements[i].childNodes.length === 0) {
                    if (cloneOfElements[i].textContent.includes(wordToReplace)) {
                        element = elements[i];
                    }
                } else {
                    if (elements[i] !== undefined) {
                        findword(cloneOfElements[i].childNodes, elements[i].childNodes, wordToReplace);
                    }
                }
            }
        }
    }

    showIndicationInsideText(wordToReplace: string, indications: string) {
        let element: any;
        findword(
            window['documentBodyCloneGlobal'].getElementsByTagName('*'),
            document.getElementsByTagName('office:text')[0].getElementsByTagName('*'),
            wordToReplace
        );

        const para = document.createElement('div');
        para.innerHTML = `<div class="indicator-content not-selectable">
                            <button id="close-indication">&#10006;</button>
                            <span class="not-selectable" style="margin:auto; width:100%">${indications}
                            </span>
                        </div>`;

        para.style.top = element.getBoundingClientRect().top;
        para.style.left = element.getBoundingClientRect().left;
        para.classList.add('indicator');
        para.classList.add('smooth-intro');
        para.classList.add('not-selectable');
        element.appendChild(para);
        window.addEventListener('click', removeIndication);
        this.scrollToElementWithClassFocus('indicator', para.offsetHeight);

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

        function findword(cloneOfElements: any, elements: any, wordToReplace2: any) {
            const dataIdentifier = document.querySelectorAll(`[data-identifier]`);
            if (dataIdentifier) {
                dataIdentifier.forEach( (e: any) => {
                    if (e.getAttribute('data-identifier') === wordToReplace2) {
                        element = e;
                    }
                });
            } else {
                for (let i = 0; i < cloneOfElements.length; i++) {
                    if (cloneOfElements[i].childNodes.length === 0) {
                        if (cloneOfElements[i].textContent.includes(wordToReplace2)) {
                                if (elements[i].parentElement.tagName === 'text:span') {
                                    element = elements[i].parentElement.parentElement;
        
                                } else {
                                    element = elements[i].parentElement;
                                }
                        }
                    } else {
                        if (elements[i] !== undefined) {
                            findword(cloneOfElements[i].childNodes, elements[i].childNodes, wordToReplace2);
                        }
                    }
                }
            }
        }

        // function getPosition(el: any) {

        // const scrollResult =  el.parentElement.getBoundingClientRect().top - 
        //     document.getElementsByClassName('sub-menu')[0].clientHeight -
        //     document.getElementsByTagName("office:text")[0].getBoundingClientRect().top - 
        //     document.getElementsByTagName("nav")[0].clientHeight;
        
        //     document.getElementById('webodfeditor-canvascontainer1').scrollTop = scrollResult;
        // }
    }


    // This functions traverses the DOM looking for the element that contains the word
    // in two objects, the clone original one and in the one we are going to replace the word
    findword(cloneOfElements: any, elements: any, wordToReplace: any) {
        for (let i = 0; i < cloneOfElements.length; i++) {
            if (!this.elementIsExcluded(cloneOfElements[i])) {
                if (cloneOfElements[i].childNodes.length === 0) {
                    if (cloneOfElements[i].textContent.includes(wordToReplace)) {
                        const twoValues = {
                            clone: cloneOfElements[i],
                            element: elements[i]
                        };
                        /* Check if object is already inside the array */
                        if ( !(this.valuesToChange.filter(function(e) { return e.clone === cloneOfElements[i]; }).length > 0)) {
                            this.valuesToChange.push(twoValues);
                        }
                    }
                } else {
                    if (elements[i] !== undefined) {
                        this.findword(cloneOfElements[i].childNodes, elements[i].childNodes, wordToReplace);
                    }
                }
            }
        }
    }

    // When traversing the DOM odf element, I know that some elements will not contain what I am looking for
    // so I exclud them from the search
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

    rangeReplacement(timesToRepeat: number, valuesToChange: any, subSteps: Array<object>) {
        // If they are located at the same paragraph
        if (valuesToChange[0].element.parentElement.parentElement === valuesToChange[1].element.parentElement.parentElement) {
            for (let i = 0; i < timesToRepeat; i++) {
                console.log(subSteps[i]);
                const clone = valuesToChange[0].element.parentElement.parentElement.cloneNode(true);
                valuesToChange[0].element
                .parentElement.parentElement.parentNode
                .insertBefore(clone, valuesToChange[0].element.parentElement.parentElement.nextElementSibling);
            }
        } else {

            for (let i = 0; i < timesToRepeat; i++) {
                // We have to take all the elements to be appended
                let firstElementPlace = valuesToChange[0].element.parentElement;
                let secondElementPlace = valuesToChange[1].element.parentElement;
                while (firstElementPlace.parentElement.nodeName !== 'office:text') {
                    firstElementPlace = firstElementPlace.parentNode;
                }
                while (secondElementPlace.parentElement.nodeName !== 'office:text') {
                    secondElementPlace = secondElementPlace.parentNode;
                }
                const arrayOfElementsToAppend = [];
                let currentElement = firstElementPlace;
                while (currentElement !== secondElementPlace) {
                    arrayOfElementsToAppend.push(currentElement.cloneNode(true));
                    currentElement = currentElement.nextElementSibling;
                }
                arrayOfElementsToAppend.push(secondElementPlace.cloneNode(true));
                const nextSibling = valuesToChange[1].element.parentElement.parentElement.nextElementSibling;
                arrayOfElementsToAppend.forEach((element) => {
                    valuesToChange[1].element.parentElement.parentElement.parentNode.insertBefore(element, nextSibling);
                });
                // this.replaceTextForRangeReplacement(arrayOfElementsToAppend, subSteps);
            }
        }
    }

    replaceTextForRangeReplacement(arrayOfElementsToAppend: any, subSteps: any) {
        subSteps.forEach((substep: any) => {
            // this.valuesToChange = [];
            // this.findword(
            //     arrayOfElementsToAppend,
            //     arrayOfElementsToAppend,
            //     substep.wordToCreateTheReplace
            // );
            // this.valuesToChange.forEach((valueToChange: any) => {
            //     const innerHTML = valueToChange.clone.parentElement.innerHTML;
            //     const regexp = new RegExp(substep.wordToCreateTheReplace, 'g');
            //     console.log(regexp);
            //     let innerHTMLreplaced: any;
            //     if (substep.isFocused) {
            //         innerHTMLreplaced = innerHTML.replace(regexp,
            //             `<span class="highlight focused">${substep.wordToReplace}</span>`
            //             );
            //     } else {
            //         innerHTMLreplaced = innerHTML.replace(regexp,
            //             `<span class="highlight">${substep.wordToReplace}</span>`
            //             );
            //     }
            //     valueToChange.element.parentElement.innerHTML = innerHTMLreplaced;
            // });
            // // console.log(this.valuesToChange);
            // this.documentBodyClone = document.getElementsByTagName('office:text')[0].cloneNode(true);
        });
    }

}
