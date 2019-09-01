import { Injectable } from '@angular/core';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';
// import '../../../assets/js/wodotexteditor/localfileeditor.js';

@Injectable()
export class OdfEditorService {

    public valuesToChange: Array<any>;
    public documentBodyClone: any;

    constructor () {}

    createEditor(formType: string, idOfContainer: string = 'editorContainer') {
        FormBasedDocsApi.createEditor(formType, idOfContainer);
    }

    resizeDocumentContainer() {
        FormBasedDocsApi.documentToFitScreen();
    }

    closeEditor() {
        FormBasedDocsApi.closeDocument();
    }

    setCursorPositionForDragAndDrop(e: any) {
        FormBasedDocsApi.setCursorPositionForDragAndDrop(e);
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
                        cursorNode.parentNode.childNodes[index + 1].textContent = 
                        event['dataTransfer'].getData('text') + cursorNode.parentNode.childNodes[index + 1].textContent;
                    } else {
                        const textContent = document.createTextNode(event['dataTransfer'].getData('text'));
                        cursorNode.parentNode.insertBefore(textContent, cursorNode);
                    }
                }
            });
        });
    }

    replaceWord(steps: any, documentBodyClone: any) {

        this.documentBodyClone = documentBodyClone;
        // I replace the body of the document because, if not, after the first replacement it will not
        // be able to find the word again
        document.getElementsByTagName('office:text')[0]
            .parentElement
            .replaceChild(this.documentBodyClone.cloneNode(true), document.getElementsByTagName('office:text')[0]);


        // Find all the DOM elements where the word is located
        steps.forEach((step: any) => {
            if (step.type === 'inputText' || step.type === 'inputDate') {
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
                            `<span class="highlight focused">${step.replacement}</span>`
                            );
                    } else {
                        innerHTMLreplaced = innerHTML.replace(regexp,
                            `<span class="highlight">${step.replacement}</span>`
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

        this.scrollToElementWithClassFocus();

    }

    scrollToElementWithClassFocus() {
        if (document.getElementsByClassName('focused').length) {
            // Adjust scroll so it scrolls in div
            document.getElementById('webodfeditor-canvascontainer1').scrollTo(0,
                ((document.getElementsByClassName('focused')[0].parentElement.parentElement.getBoundingClientRect().top +
                document.getElementById('webodfeditor-canvascontainer1').scrollTop) -
                document.getElementsByTagName('nav')[0].offsetHeight -
                document.getElementsByClassName('sub-menu')[0].clientHeight -
                document.getElementsByClassName('webodfeditor-toolbarcontainer')[0].clientHeight
            ));
        }
    }

    showIndicationModal(word: String, documentBodyClone: any) {
        let element: any;
        findword(
            documentBodyClone.getElementsByTagName('*'),
            document.getElementsByTagName('office:text')[0].getElementsByTagName('*'),
            word
        );
        console.log(element.parentElement.getBoundingClientRect());
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
