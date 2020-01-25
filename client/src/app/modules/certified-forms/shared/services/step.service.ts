import { Injectable } from '@angular/core';
import { CommonsService } from '../../../../core';
import { DocCreatorService } from './doc-creator.service';

@Injectable()
export class StepsService {
  public steps: Array<any>;

  constructor(
    private documentCreatorService: DocCreatorService,
    private commonsService: CommonsService
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
          case 'iNumber':
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
    this.buildDocument(false);
  }

  buildDocument(scrollToElement: boolean = true) {
    this.documentCreatorService.buildDocument(this.steps, scrollToElement);
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
          step.extraReplacements.forEach((extraReplacement: any, index: number) => {
            if (extraReplacement.wordToReplace === rule.wordToReplace) {
              step.extraReplacements.splice(index, 1);
            }
          })
          step.extraReplacements.push({
            wordToReplace: rule.wordToReplace,
            replacement: this.commonsService.numeroALetras(step.replacement, {
              plural: 'euros',
              singular: 'euro',
              centPlural: 'centavos',
              centSingular: 'centavo'
            })
          });
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
        this.cleanPreviouslyAddedSteps(index, step.identifier);
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

  cleanPreviouslyAddedSteps(index: number, identifierOrWordToReplace: string) {
    while (this.steps[index + 1] && this.steps[index + 1].wordToReplace.includes(identifierOrWordToReplace)) {
      this.steps.splice((index + 1), 1);
    }
  };

  onInputRadioBSelected(radioSelectedId: any, wordToReplace: string, buildDocumentAfter: boolean = true) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.wordToReplace === wordToReplace) {
        step.isFocused = true;
        // 2. Find radio selected
        step.radios.forEach((radio) => {
          if (radio.radioId === radioSelectedId) {
            step.replacement = radio.replacementOriginal;
            radio.checked = true;
          } else {
            radio.checked = false;
          }
        });
      } else {
        step.isFocused = false;
      }
    });
    if (buildDocumentAfter) {
      this.buildDocument();
    }
  }

  onInputRadioCSelected(radioSelectedId: any, wordToReplace: string, buildDocumentAfter: boolean = true) {
    const buildSelectedRadio = (step: any, index: number, radio: any, ) => {
      // 3. Clean possible previously added steps, so we don't repeat them
      this.cleanPreviouslyAddedSteps(index, step.wordToReplace);
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

      if (step.wordToReplace === wordToReplace) {
        step.isFocused = true;
      } else {
        step.isFocused = false;
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
        if (step.rules && step.rules.length) {
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
}
