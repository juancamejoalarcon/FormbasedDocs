import { Injectable } from '@angular/core';
import { DocumentCreatorService } from './document-creator.service';

@Injectable()
export class StepModelService {

  public steps: Array<any>;

  constructor(
    private documentCreatorService: DocumentCreatorService
  ) { }

  init(steps: Array<Object>) {
    this.steps = steps;
  }

  input(replacement: string, inputType: string, wordToReplace: string) {
    // 1. Find the step
    this.steps.forEach((step) => {
      if (step.wordToReplace === wordToReplace) {
        step.replacement = replacement;
      }
    });
    this.documentCreatorService.buildDocument(this.steps);
  }

  buildForEach(value: string, identifier: string) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
        step.value = value;
        // 2. Clean possible previously added steps, so we don't repeat them
        while (this.steps[index + 1] && this.steps[index + 1].wordToReplace.includes(step.identifier)) {
          this.steps.splice((index + 1), 1);
        }
        // 3. Loop through the texts that will be inserted
        step.content.forEach((content, contentIndex) => {
          content.modifiedReplacements = [];
          content.modifiedExtraReplacements = [];
          // 4. Add steps
          // tslint:disable-next-line:radix
          for (let i = 0; i < parseInt(value); i++) {
            let modifiedReplacement = content.replacementOriginal;
            const modifiedExtraReplacements = [];
            content.subSteps.forEach((subStep: any, subStepIndex: any) => {
              // 5. Modify subSteps identifiers and text with index of value loop iteration
              const newIndentifier = step.identifier + subStep.identifier + i.toString() + subStepIndex.toString();
              modifiedReplacement = modifiedReplacement.replace(subStep.identifier, newIndentifier);
              content.extraReplacements.forEach((extraReplacement: any) => {
                modifiedExtraReplacements.push({
                  identifier: extraReplacement.identifier + i.toString() + subStepIndex.toString()
                });
              });
              // Deep copy
              const copySubStep = JSON.parse(JSON.stringify(subStep));
              copySubStep.identifier = newIndentifier;
              copySubStep.wordToReplace = newIndentifier;

              this.steps.splice(
                ((index + 1) +
                (subStepIndex) +
                (i * content.subSteps.length) +
                // tslint:disable-next-line:radix
                ((parseInt(value) * contentIndex) *  content.subSteps.length)
                ), 0, copySubStep);
            });
            content.modifiedReplacements.push(modifiedReplacement);
            content.modifiedExtraReplacements.push(modifiedExtraReplacements);
          }
          // 5. Insert text in the office document
        });
      }
    });
    this.documentCreatorService.buildDocument(this.steps);
  }

  onInputRadioBSelected(radioSelectedId: any, identifier: string) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
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
    this.documentCreatorService.buildDocument(this.steps);
  }

  onInputRadioCSelected(radioSelectedId: any, identifier: string) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
        // 2. Find radio selected
        step.radios.forEach((radio) => {
          if (radio.radioId === radioSelectedId) {
            // 3. Clean possible previously added steps, so we don't repeat them
            while (this.steps[index + 1] && this.steps[index + 1].wordToReplace.includes(step.identifier)) {
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

              this.steps.splice(((index + 1) + subStepIndex ), 0, subStep);
            });
            radio.replacement = replacement;
            radio.checked = true;
          } else {
            radio.checked = false;
          }
        });
      }
    });
    this.documentCreatorService.buildDocument(this.steps);
  }

  onInputCheckboxSelected(checkboxIdentifier: any, identifier, checked: any) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
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
    this.documentCreatorService.buildDocument(this.steps);
  }

  getStepsModel() {
    return this.steps;
  }
}
