import { Injectable, ɵConsole } from '@angular/core';
import { ContratoCompraventaVehiculoCreatorService } from './contrato-compraventa-vehiculo-creator.service';

@Injectable()
export class ContratoCompraventaVehiculoStepsService {
  public steps: Array<any>;

  constructor(
    private documentCreatorService: ContratoCompraventaVehiculoCreatorService
  ) { }

  init(steps: Array<Object>) {
    this.steps = steps;
  }

  setInitialState() {
    const buildSteps = () => {
      this.steps.forEach((step) => {
        switch (step.type) {
          case 'iText':
              this.input(step.replacement, step.wordToReplace, false);
            break;
          case 'iDate':
              this.input(step.replacement, step.wordToReplace, false);
            break;
          case 'iForEach':
              this.buildForEach(step.value, step.wordToReplace, false);
            break;
          case 'iRadioC':
            let noneIsChecked = true;
              step.radios.forEach((radio: any) => {
                if (radio.checked) {
                  noneIsChecked = false;
                  this.onInputRadioCSelected(radio.radioId, step.wordToReplace, false);
                }
              });
              if (noneIsChecked) {
                this.onInputRadioCSelected(step.defaultRadioId, step.wordToReplace, false);
              }
            break;
          default:
            break;
        }
      });
    };
    // We need to check the level of depth
    buildSteps();
    buildSteps();
    buildSteps();
    this.buildDocument();
  }

  buildDocument() {
    this.documentCreatorService.buildDocument(this.steps);
  }

  input(replacement: string, wordToReplace: string, buildDocumentAfter: boolean = true) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.wordToReplace === wordToReplace) {
        step.replacement = replacement;
        step.isFocused = true;
        if (step.type === 'iNumber') {
          this.rulesForInumber(step, index);
        }
      } else {
        step.isFocused = false;
      }
    });
    if (buildDocumentAfter) {
      this.buildDocument();
    }
  }

  rulesForInumber(step: any, index: number) {
    if (step.rules.length) {
      step.rules.forEach((rule: any) => {
        if (rule.rulename === 'extraReplacementToCharacter') {
          while (this.steps[index + 1] && this.steps[index + 1].wordToReplace.includes(step.identifier)) {
            this.steps.splice((index + 1), 1);
          }
          console.log(this.numeroALetras(step.replacement, {
            plural: 'dólares estadounidenses',
            singular: 'dólar estadounidense',
            centPlural: 'centavos',
            centSingular: 'centavo'
          }));
        }
      });
    }
  }

  buildForEach(value: string, wordToReplace: string, buildDocumentAfter: boolean = true) {
    const refreshRadioCSteps = [];
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.wordToReplace === wordToReplace) {
        step.value = value;
        // 2. Clean possible previously added steps, so we don't repeat them
        const cache = JSON.parse(JSON.stringify(this.steps));
        while (this.steps[index + 1] && this.steps[index + 1].wordToReplace.includes(step.identifier)) {
          this.steps.splice((index + 1), 1);
        }
        // 3. Loop through the texts that will be inserted
        step.content.forEach((content, contentIndex) => {
          content.modifiedReplacements = [];
          content.modifiedExtraReplacements = [];
          const modifiedExtraReplacements = [];
          content.extraReplacements.forEach(() => {modifiedExtraReplacements.push([]); } );
          // 4. Add steps
          // tslint:disable-next-line:radix
          for (let i = 0; i < parseInt(value); i++) {
            let modifiedReplacement = content.replacementOriginal;
            content.extraReplacements.forEach((extraReplacement: any, indexOfExtraReplace: number) => {
              modifiedExtraReplacements[indexOfExtraReplace].push({
                identifier: extraReplacement.identifier,
                replacement: extraReplacement.replacementOriginal
              });
            });
            content.subSteps.forEach((subStep: any, subStepIndex: any) => {
              // 5. Modify subSteps identifiers and text with index of value loop iteration
              const newIndentifier = step.identifier + subStep.identifier + i.toString() + subStepIndex.toString();
              modifiedReplacement = modifiedReplacement.replace(subStep.identifier, newIndentifier);
              content.extraReplacements.forEach((extraReplacement: any, indexOfExtraReplace: number) => {
                const subStepExtraReplacement = subStep.extraReplacements[indexOfExtraReplace];
                const modifiedExtraReplacement = modifiedExtraReplacements[indexOfExtraReplace][i];
                modifiedExtraReplacement.wordToReplace = extraReplacement.identifier + i.toString() + subStepIndex.toString();
                const newIndentifier2 = step.identifier + subStepExtraReplacement.identifier + i.toString() + subStepIndex.toString();
                modifiedExtraReplacement.replacement =
                modifiedExtraReplacement.replacement.replace(subStepExtraReplacement.identifier, newIndentifier2);
                subStepExtraReplacement.wordToReplace = newIndentifier2;
                // modifiedExtraReplacements[indexOfExtraReplace].push({
                //   wordToReplace: step.identifier + extraReplacement.identifier + i.toString() + subStepIndex.toString(),
                //   identifier: extraReplacement.identifier
                // });
              });
              // Deep copy
              let copySubStep = JSON.parse(JSON.stringify(subStep));
              cache.forEach((cachedStep) => {
                if (cachedStep.wordToReplace == newIndentifier) {
                  copySubStep = JSON.parse(JSON.stringify(cachedStep));
                  copySubStep.cached = true;
                }
              });
              copySubStep.identifier = newIndentifier;
              copySubStep.wordToReplace = newIndentifier;

              this.steps.splice(
                ((index + 1) +
                (subStepIndex) +
                (i * content.subSteps.length) +
                // tslint:disable-next-line:radix
                ((parseInt(value) * contentIndex) *  content.subSteps.length)
                ), 0, copySubStep);

                // refresh radioC inside forEach
                if (copySubStep.type === 'iRadioC') {
                  refreshRadioCSteps.push(copySubStep);
                }

            });
            content.modifiedReplacements.push(modifiedReplacement);
          }
          content.modifiedExtraReplacements.push(modifiedExtraReplacements);
          // 5. Insert text in the office document
        });
      }
    });
    if (buildDocumentAfter) {
      refreshRadioCSteps.forEach((step) => {
        if (step.cached) {
          step.radios.forEach((radio) => {
            if (radio.checked) {
              this.onInputRadioCSelected(radio.radioId, step.wordToReplace, false);
            }
          });
        } else {
          this.onInputRadioCSelected(step.defaultRadioId, step.wordToReplace, false);
        }
      });
      this.buildDocument();
    }
  }

  onInputRadioBSelected(radioSelectedId: any, wordToReplace: string, buildDocumentAfter: boolean = true) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.wordToReplace === wordToReplace) {
        // 2. Find radio selected
        step.radios.forEach((radio) => {
          if (radio.radioId === radioSelectedId) {
            step.replacement = radio.replacementOriginal;
            radio.checked = true;
          } else {
            radio.checked = false;
          }
        });
      }
    });
    if (buildDocumentAfter) {
      this.buildDocument();
    }
  }

  onInputRadioCSelected(radioSelectedId: any, wordToReplace: string, buildDocumentAfter: boolean = true) {
    const buildSelectedRadio = (step: any, index: number, radio: any, ) => {
      // 3. Clean possible previously added steps, so we don't repeat them
      while (this.steps[index + 1] && this.steps[index + 1].wordToReplace.includes(step.wordToReplace)) {
        this.steps.splice((index + 1), 1);
      }
      // 2. Add steps
      let replacement = radio.replacementOriginal;
      radio.extraReplacements.forEach((extraReplacement) => { extraReplacement.replacement = extraReplacement.replacementOriginal; });
      radio.subSteps.forEach((subStep, subStepIndex) => {
          // Make step unique modifying identifier
          subStep.wordToReplace = step.identifier + subStep.identifier;
          replacement = replacement.replace(subStep.identifier, subStep.wordToReplace);

          radio.extraReplacements.forEach( (extraReplacement) => {
              extraReplacement.replacement = extraReplacement.replacement.replace(subStep.identifier, subStep.wordToReplace);
          });
          // reset checkboxes if any
          if (subStep.type === 'iCheckbox') {
              subStep.checkboxes.forEach((checkbox) => { checkbox.checked = false; });
          }
          if (subStep.type === 'iRadioC') {
            // Si falla algo, mete el substep en la variable copysubstep
              subStep.inheritFromRadioC = subStep.wordToReplace;
              subStep.radios.forEach((radioC: any) => {
                  radioC.subSteps.forEach((radioCsubstep: any) => {
                      const newIndentifier = subStep.wordToReplace + radioCsubstep.identifier;
                      radioC.replacementOriginal = radioC.replacementOriginal.replace(radioCsubstep.identifier, newIndentifier);
                      radioCsubstep.wordToReplace = newIndentifier;
                      // Mirar si se puede quitar esto
                      radioCsubstep.identifier = newIndentifier;
                      radioCsubstep.inherited = true;
                  });
              });
          }
          if (subStep.type !== 'iRadioC') {
              this.steps.splice(((index + 1) + subStepIndex ), 0, subStep);
          } else {
              this.steps.splice(((index + 1) + subStepIndex ), 0, subStep);
          }
      });
      radio.replacement = replacement;
      radio.checked = true;
    };
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === wordToReplace) {
        // 2. Find radio selected
        step.radios.forEach((radio) => {
          if (radio.radioId === radioSelectedId) {
            buildSelectedRadio(step, index, radio);
          } else {
            radio.checked = false;
          }
        });
      } else if (step.inheritFromRadioC) {
        if (step.inheritFromRadioC === wordToReplace) {
          step.radios.forEach((radio) => {
          if (radio.radioId === radioSelectedId) {
            buildSelectedRadio(step, index, radio);
          } else {
            radio.checked = false;
          }
          });
        } else {
          let noneIsChecked = true;
          step.radios.forEach((radio) => {
            if (radio.checked) {
              noneIsChecked = false;
              buildSelectedRadio(step, index, radio);
            } else {
              radio.checked = false;
            }
          });
          if (noneIsChecked) {
            step.radios.forEach((radio) => {
              if (radio.radioId === step.defaultRadioId) {
                buildSelectedRadio(step, index, radio);
              } else {
                radio.checked = false;
              }
            });
          }
        }
      }
    });
    if (buildDocumentAfter) {
      this.buildDocument();
    }
  }

  onInputCheckboxSelected(checkboxIdentifier: any, wordToReplace: any, checked: any, buildDocumentAfter: boolean = true) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.wordToReplace === wordToReplace) {
        let replacement = step.replacementOriginal;
          // 2. Find checkbox selected
          step.checkboxes.forEach((checkbox: any) => {
            // Make step unique modifying identifier
            checkbox.wordToReplace = step.wordToReplace + checkbox.identifier;
            replacement = replacement.replace(checkbox.identifier, checkbox.wordToReplace);
            if (checkbox.identifier === checkboxIdentifier) {
              // 3. Clean possible previously added steps, so we don't repeat them
              const lengthOfRestOfArray = this.steps.length - index;
              for (let i = 0; i < lengthOfRestOfArray; i++) {
                if (this.steps[(index + 1) + i] && this.steps[(index + 1) + i].wordToReplace.includes(checkbox.identifier)) {
                  this.steps.splice((index + 1 + i), 1);
                }
              }
              // 2. Add steps
              if (checked) {
                let replacementSubstep = checkbox.replacementOriginal;
                checkbox.subSteps.forEach((subStep, subStepIndex) => {
                  subStep.wordToReplace = checkbox.wordToReplace + subStep.identifier;
                  replacementSubstep = replacementSubstep.replace(subStep.identifier, subStep.wordToReplace);
                  this.steps.splice(((index + 1) + subStepIndex ), 0, subStep);
                });
                checkbox.replacement = replacementSubstep;
              }
              checkbox.checked = checked;
            }
          });
        step.replacement = replacement;
        // Aplly rules
        if (step.rules.length) {
          step.rules.forEach((rule: any) => {
            if (rule.condition === 'noneIsChecked') {
              let isAnyCheck = false;
              step.checkboxes.forEach((checkbox: any) => {
                if (checkbox.checked) { isAnyCheck = true; }
              });
              if (!isAnyCheck) {
                step.replacement = rule.replacement;
                rule.isFulfilled = true;
              } else {
                rule.isFulfilled = false;
              }
            }
          });
        }
      }
    });
    if (buildDocumentAfter) {
      this.buildDocument();
    }
  }

  getStepsModel() {
    return this.steps;
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
