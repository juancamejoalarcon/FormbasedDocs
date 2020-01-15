import { Injectable } from '@angular/core';
import * as FormBasedDocsApi from '../../../assets/js/wodotexteditor/localfileeditor.js';
import * as screenfull from 'screenfull';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class CommonsService {

    public isDocumentVisible = false;
    constructor (
        private toastr: ToastrService
    ) {}

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

    showIndicationsInsideTextPlainText(wordToReplace: string, indications: string) {
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
        const scrollListenner = function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                displayIndicator();
                document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
            }, 100);
        }.bind(this);

        document.querySelector('#editor-preview').addEventListener('scroll', scrollListenner);
        // If it is not scrolling
        setTimeout(() => {
            if (scrollTop === document.querySelector('#editor-preview').scrollTop) {
                displayIndicator();
                document.querySelector('#editor-preview').removeEventListener('scroll', scrollListenner);
            }
        }, 100);


        function displayIndicator() {
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

    resizeEditor(isLoaded: boolean = true) {
        if (window.innerWidth > 885) {
          if ((document.querySelector('#form-creator') as HTMLElement) !== null) {
            const newHeight = window.innerHeight - (document.querySelector('#form-creator') as HTMLElement).offsetTop + 'px';
            // const toolBarOffsetTop = (document.querySelector('.ql-toolbar') as HTMLElement).offsetTop;
            // const toolBarOffsetHeight = (document.querySelector('.ql-toolbar') as HTMLElement).offsetHeight;
            // const newHeightForEditor = window.innerHeight - (toolBarOffsetTop + toolBarOffsetHeight) + 'px';
            document.getElementById('text-area').style.display = 'block';
            document.getElementById('fields-area').style.display = 'block';
            document.getElementById('scrollToTop').style.display = 'none';
            (document.querySelector('#form-creator') as HTMLElement).style.height = newHeight;
            (document.querySelector('#fields-area') as HTMLElement).style.height = newHeight;
            (document.querySelector('#text-area') as HTMLElement).style.height = newHeight;
            // (document.querySelector('#editor-container') as HTMLElement).style.height = newHeightForEditor;
          }
        } else {
            // Mobile mode
            if (isLoaded) {
                if (document.getElementById('fields-area').style.display === 'none') {
                    document.getElementById('fields-area').style.display = 'none';
                    document.getElementById('text-area').style.display = 'block';
                    document.getElementById('scrollToTop').style.display = 'block';

                    const newHeight = window.innerHeight - (document.querySelector('#text-area') as HTMLElement).offsetTop + 'px';
                    (document.querySelector('#text-area') as HTMLElement).style.height = newHeight;

                } else {
                    document.getElementById('fields-area').style.display = 'block';
                    document.getElementById('text-area').style.display = 'none';
                    document.getElementById('scrollToTop').style.display = 'none';

                    const newHeight = window.innerHeight - (document.querySelector('#fields-area') as HTMLElement).offsetTop + 'px';
                    (document.querySelector('#fields-area') as HTMLElement).style.height = newHeight;
                }
            }

        }
    }

    previewDocumentButton(setDocumentVisible: boolean) {
        if (setDocumentVisible) {
            document.getElementById('fields-area').style.display = 'none';
            document.getElementById('text-area').style.display = 'block';
            document.getElementById('scrollToTop').style.display = 'block';
        } else {
            document.getElementById('fields-area').style.display = 'block';
            document.getElementById('text-area').style.display = 'none';
            document.getElementById('scrollToTop').style.display = 'none';
        }
        this.resizeEditor(true);
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
            ['d-grid-100', 'd-none-grid'],
            ['d-inline', 'd-none-inline'],
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
                valuesToInsert[newKey][0] = `<mark id="focused" data-identifier="${newKey}">` + valuesToInsert[newKey][0] + '</mark>';
            } else {
                valuesToInsert[key][0] = `<mark data-identifier="${key}">` + valuesToInsert[key][0] + '</mark>';
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

    validateEmail(email: string) {
        // tslint:disable-next-line:max-line-length
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    toastMessage(type: string, message1: string, message2: string) {
        if (type === 'error') {
          this.toastr.error(message1, message2, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        } else if (type === 'success') {
          this.toastr.success(message1, message2, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        }
    }

    getBrowserType() {
        const windowVariable = window as any;
        if (!!windowVariable.chrome && (!!windowVariable.chrome.webstore || !!windowVariable.chrome.runtime)) {
            return 'Chrome';
        }
    }

    numeroALetras (num, currency) {
        // Código basado en https://gist.github.com/alfchee/e563340276f89b22042a
        const Unidades = (number: number) => {
    
          switch (number) {
    
            case 1: return 'UN';
            case 2: return 'DOS';
            case 3: return 'TRES';
            case 4: return 'CUATRO';
            case 5: return 'CINCO';
            case 6: return 'SEIS';
            case 7: return 'SIETE';
            case 8: return 'OCHO';
            case 9: return 'NUEVE';
          }
          return '';
        };
    
        const Decenas = (number: number) => {
          const decena = Math.floor(number / 10);
          const unidad = number - (decena * 10);
    
          switch (decena) {
            case 1:
              switch (unidad) {
                case 0: return 'DIEZ';
                case 1: return 'ONCE';
                case 2: return 'DOCE';
                case 3: return 'TRECE';
                case 4: return 'CATORCE';
                case 5: return 'QUINCE';
                default: return 'DIECI' + Unidades(unidad);
              }
            case 2:
              switch (unidad) {
                case 0: return 'VEINTE';
                default: return 'VEINTI' + Unidades(unidad);
              }
            case 3: return DecenasY('TREINTA', unidad);
            case 4: return DecenasY('CUARENTA', unidad);
            case 5: return DecenasY('CINCUENTA', unidad);
            case 6: return DecenasY('SESENTA', unidad);
            case 7: return DecenasY('SETENTA', unidad);
            case 8: return DecenasY('OCHENTA', unidad);
            case 9: return DecenasY('NOVENTA', unidad);
            case 0: return Unidades(unidad);
          }
        };
    
        const DecenasY = (strSin, numUnidades) => {
          if (numUnidades > 0) {
            return strSin + ' Y ' + Unidades(numUnidades);
          }
          return strSin;
        };
    
        const Centenas = (number: number) => {
          const centenas = Math.floor(number / 100);
          const decenas = number - (centenas * 100);
    
          switch (centenas) {
            case 1:
              if (decenas > 0) {
                return 'CIENTO ' + Decenas(decenas);
              } else {
                return 'CIEN';
              }
            case 2: return 'DOSCIENTOS ' + Decenas(decenas);
            case 3: return 'TRESCIENTOS ' + Decenas(decenas);
            case 4: return 'CUATROCIENTOS ' + Decenas(decenas);
            case 5: return 'QUINIENTOS ' + Decenas(decenas);
            case 6: return 'SEISCIENTOS ' + Decenas(decenas);
            case 7: return 'SETECIENTOS ' + Decenas(decenas);
            case 8: return 'OCHOCIENTOS ' + Decenas(decenas);
            case 9: return 'NOVECIENTOS ' + Decenas(decenas);
          }
    
          return Decenas(decenas);
        };
    
        const Seccion = (number, divisor, strSingular, strPlural) => {
          const cientos = Math.floor(number / divisor);
          const resto = number - (cientos * divisor);
          let letras = '';
    
          if (cientos > 0) {
            if (cientos > 1) {
              letras = Centenas(cientos) + ' ' + strPlural;
            } else {
              letras = strSingular;
            }
          }
    
          if (resto > 0) {
            letras += '';
          }
    
          return letras;
        };
    
        const Miles = (number) => {
          const divisor = 1000;
          const cientos = Math.floor(number / divisor);
          const resto = number - (cientos * divisor);
          const strMiles = Seccion(number, divisor, 'UN MIL', 'MIL');
          const strCentenas = Centenas(resto);
    
          if (strMiles === '') {
            return strCentenas;
          }
          return strMiles + ' ' + strCentenas;
        };
    
        const Millones = (number) => {
          const divisor = 1000000;
          const cientos = Math.floor(number / divisor);
          const resto = number - (cientos * divisor);
          const strMillones = Seccion(number, divisor, 'UN MILLON DE', 'MILLONES DE');
          const strMiles = Miles(resto);
    
          if (strMillones === '') {
            return strMiles;
          }
    
          return strMillones + ' ' + strMiles;
        };
    
        const finalAmount = (number, cur) => {
          cur = cur || {};
          const data = {
            numero: number,
            enteros: Math.floor(number),
            centavos: (((Math.round(number * 100)) - (Math.floor(number) * 100))),
            letrasCentavos: '',
            letrasMonedaPlural: cur.plural || 'PESOS CHILENOS',//'PESOS', 'Dólares', 'Bolívares', 'etcs'
            letrasMonedaSingular: cur.singular || 'PESO CHILENO', //'PESO', 'Dólar', 'Bolivar', 'etc'
            letrasMonedaCentavoPlural: cur.centPlural || 'CHIQUI PESOS CHILENOS',
            letrasMonedaCentavoSingular: cur.centSingular || 'CHIQUI PESO CHILENO'
          };
    
          if (data.centavos > 0) {
            data.letrasCentavos = 'CON ' + (() => {
              if (data.centavos === 1) {
                return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
              } else {
                return Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
              }
            })();
          }
    
          if (data.enteros === 0) {
            return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
          }
          if (data.enteros === 1) {
            return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
          } else {
            return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
          }
        };
    
        return finalAmount(num, currency);
      }

}