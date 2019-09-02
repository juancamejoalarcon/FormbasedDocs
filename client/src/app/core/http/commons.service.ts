import { Injectable } from '@angular/core';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';
import * as screenfull from 'screenfull';


@Injectable()
export class CommonsService {

    constructor () {}

    toggleModal(modal: any, closeWhenClickedOuside = true) {
        if (!modal.classList.contains('show-modal')) {
            modal.classList.toggle('show-modal');
            window.addEventListener('click', modalEventListener);
        } else {
            modal.classList.toggle('show-modal');
            // Instead of remove I add another one, workarround
            // that adds another event that will be deleted as well
            window.addEventListener('click', modalEventListener);
        }

        function modalEventListener() {
            if (closeWhenClickedOuside) {
                if (event.target === modal) {
                    modal.classList.toggle('show-modal');
                    window.removeEventListener('click', modalEventListener);
                }
            }
        }
    }

    toggleLightbox(lightBox: any, closeWhenClickedOuside = true) {
        if (!lightBox.classList.contains('show-lightbox')) {
            lightBox.classList.toggle('show-lightbox');
            window.addEventListener('click', modalEventListener);
        } else {
            lightBox.classList.toggle('show-lightbox');
            // Instead of remove I add another one, workarround
            // that adds another event that will be deleted as well
            window.addEventListener('click', modalEventListener);
        }

        function modalEventListener() {
            if (closeWhenClickedOuside) {
                if (event.target === lightBox) {
                    lightBox.classList.toggle('show-lightbox');
                    window.removeEventListener('click', modalEventListener);
                }
            }
        }
    }

    subMenuNav(e: any, subMenuElement: any) {
        e.preventDefault();
        if (e.target.nodeName === 'LI') {
          subMenuElement.querySelectorAll('.sub-menu__nav__button').forEach((button: any) => {
            if (button.classList.contains('sub-menu__nav__button--current')) {
              const contentOfDivToHide = document.querySelector('#' + button.getAttribute('data-toogle')) as HTMLElement;
              contentOfDivToHide.classList.add('lateral-ease-outro');
              contentOfDivToHide.classList.remove('lateral-ease-intro');
              setTimeout(function() { contentOfDivToHide.style.display = 'none'; }, 400);
            }
            button.classList.remove('sub-menu__nav__button--current');
          });

          e.target.classList.add('sub-menu__nav__button--current');
          const contentOfDivToDisplay = document.querySelector('#' + e.target.getAttribute('data-toogle')) as HTMLElement;
          // window.location.href = '#' + e.target.getAttribute('data-toogle');
          contentOfDivToDisplay.classList.remove('lateral-ease-outro');
          contentOfDivToDisplay.classList.add('lateral-ease-intro');
          setTimeout(function() { contentOfDivToDisplay.style.display = 'block'; }, 400);
        }
    }

    resizeEditor() {
        if (window.innerWidth > 885) {
            const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
            document.getElementById('form-creator').style.height = newHeight;
        } else {
            const newHeight = window.innerHeight - document.getElementById('form-creator').offsetTop + 'px';
            document.getElementById('form-creator').style.height = '100%';
            document.getElementById('fields-area').style.height = newHeight;
            document.getElementById('text-area').style.height = window.innerHeight + 'px';
        }
    }

    isObjectEmpty(obj: object) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    enableFullScreen(id: string) {
        const el = document.getElementById(id);
        if (screenfull && screenfull.enabled) {
          screenfull.request(el);
        }
    }

    replaceClassDnone(domElement: any) {
        const elementsWithReplacement = [
            ['d-block', 'd-none'],
            ['d-flex', 'd-none-flex'],
            ['d-grid-100', 'd-none-grid']
        ];
        elementsWithReplacement.forEach((element) => {
            this.replaceClassInAllElements(domElement, element[0], element[1]);
        });
    }

    replaceClassInAllElements(domElement: any, newClassName: string, classNameToReplace: string) {
        const elementsWithNewClassName = domElement.nativeElement.querySelectorAll('.' + newClassName);
        const elementsWithClassNameToReplace = domElement.nativeElement.querySelectorAll('.' + classNameToReplace);

        for (const element of elementsWithNewClassName) { element.classList.replace(newClassName, classNameToReplace); }
        for (const element of elementsWithClassNameToReplace) { element.classList.replace(classNameToReplace, newClassName); }
    }


    replaceOtherClasses(domElement: any) {

        const divsToHide = domElement.nativeElement.querySelectorAll('.radio-create-form');
        const divsToShow = domElement.nativeElement.querySelectorAll('.radio-fill-form');

        for (const divToShow of divsToShow) { divToShow.classList.replace('radio-fill-form', 'radio-create-form'); }
        for (const divToHide of divsToHide) { divToHide.classList.replace('radio-create-form', 'radio-fill-form'); }

    }

    // This function will climb the dom untill certain level specified checking if any dom element id
    // contains the string specified
    checkIfParentElementIdContainsString(element: any, stringSearched: string, depth: number) {
        for (let i = 0; i < depth; i++ ) {
          if (element.id.includes(stringSearched)) {
            return true;
          } else {
            element = element.parentElement;
          }
        }
        return false;
      }

    disableButtons(domElement: any, buttonsAreDisabled: boolean) {
        const buttons = domElement.nativeElement.querySelectorAll('button');
        if (buttonsAreDisabled === false) {
            buttonsAreDisabled = true;
            for (const button of buttons) {
                button.disabled = true;
            }
        } else {
            buttonsAreDisabled = false;
            for (const button of buttons) {
                button.disabled = false;
            }
        }
        return buttonsAreDisabled;
    }

    enableDrag(domElement: any, referenceNumber: number) {
        domElement.id = 'dragId' + referenceNumber;
        domElement.draggable = true;
        domElement.ondragstart = function drag(ev) {
            ev.dataTransfer.setData('Text', referenceNumber);
        };
    }

    replaceIdsWithValues(valuesToInsert: any, text: any) {
        // This function adds the highlight when the users types in.
        Object.keys(valuesToInsert).forEach(function(key) {
            if (key.includes('focused')) {
                const newKey = key.replace('focused', '');
                if (key !== newKey) {
                    Object.defineProperty(valuesToInsert, newKey,
                        Object.getOwnPropertyDescriptor(valuesToInsert, key));
                    delete valuesToInsert[key];
                }
                valuesToInsert[newKey][0] = '<mark id="focused">' + valuesToInsert[newKey][0] + '</mark>';
            } else {

                valuesToInsert[key][0] = '<mark>' + valuesToInsert[key][0] + '</mark>';
            }
        });

        const valuesToInsertKeys = new RegExp(Object.keys(valuesToInsert).join('|'), 'g');

        return text.replace(valuesToInsertKeys, function(matched) {
          return valuesToInsert[matched];
        });
    }

    toggleSpinner() {
        document.getElementById('spinner').classList.toggle('show-spinner');
    }

}
