import { Injectable } from '@angular/core';

@Injectable()
export class StepModelService {

  public steps: Array<any>;

  constructor() { }

  init(steps: Array<Object>) {
    this.steps = steps;
  }

  input(replacement: string, inputType: string, identifier: string) {
    // 1. Find the step
    this.steps.forEach((step) => {
      if (step.identifier === identifier) {
        step.replacement = replacement;
      }
    });
    console.log(this.steps);
  }

  buildForEach(value: string, identifier: string) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
        step.value = value;
        // 2. Clean possible previously added steps, so we don't repeat them
        while (this.steps[index + 1] && this.steps[index + 1].identifier.includes(step.identifier)) {
          this.steps.splice((index + 1), 1);
        }
        // 3. Loop through the texts that will be inserted
        step.content.forEach((content, contentIndex) => {
          content.modifiedTexts = [];
          content.modifiedExtraTexts = [];
          // 4. Add steps
          for (let i = 0; i < parseInt(value); i++) {
            let modifiedText = content.text;
            const modifiedExtraTexts = [];
            content.subSteps.forEach((subStep: any, subStepIndex: any) => {
              // 5. Modify subSteps identifiers and text with index of value loop iteration
              const newIndentifier = subStep.identifier + i.toString() + subStepIndex.toString();
              modifiedText = modifiedText.replace(subStep.identifier, newIndentifier);
              content.extraTexts.forEach((extraText: any) => {
                modifiedExtraTexts.push({
                  identifier: extraText.identifier + i.toString() + subStepIndex.toString()
                });
              });
              // Deep copy
              const copySubStep = JSON.parse(JSON.stringify(subStep));
              copySubStep.identifier = newIndentifier;

              // Plus: If inside we have another radio C we need to modify all the identifiers
              // so we dont risk same identifier in another loop
              if (copySubStep.type === 'iRadioC') {
                copySubStep.radios.forEach((radio: any) => {
                  radio.subSteps.forEach((radioSubstep: any) => {
                    // replace text
                    radio.value = radio.value.replace(radioSubstep.identifier, newIndentifier + radioSubstep.identifier);
                    radio.valuesForExtraTexts.forEach((valueForExtraStep: any, valueForExtraStepIndex: number) => {
                      valueForExtraStep.value = valueForExtraStep.value
                      .replace(radioSubstep.identifier, newIndentifier + radioSubstep.identifier);
                      valueForExtraStep.identifierOfExtraText = modifiedExtraTexts[valueForExtraStepIndex].identifier;
                    });
                    radioSubstep.identifier = newIndentifier + radioSubstep.identifier;
                  });
                });
              }

              this.steps.splice(
                ((index + 1) +
                (subStepIndex) +
                (i * content.subSteps.length) +
                ((parseInt(value) * contentIndex) *  content.subSteps.length)
                ), 0, copySubStep);
            });
            content.modifiedTexts.push(modifiedText);
            content.modifiedExtraTexts.push(modifiedExtraTexts);
          }
          // 5. Insert text in the office document
        });
      }
    });
    console.log(this.steps);
  }

  onInputRadioCSelected(radioSelectedId: any, identifier: string) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
        // 2. Find radio selected
        step.radios.forEach((radio) => {
          if (radio.radioId === radioSelectedId) {
            // 3. Clean possible previously added steps, so we don't repeat them
            while (this.steps[index + 1] && this.steps[index + 1].identifier.includes(step.identifier)) {
              this.steps.splice((index + 1), 1);
            }
            // 2. Add steps
            radio.subSteps.forEach((subStep, subStepIndex) => {
              this.steps.splice(((index + 1) + subStepIndex ), 0, subStep);
            });
            radio.checked = true;
          } else {
            radio.checked = false;
          }
        });
      }
    });
    console.log(this.steps);
  }

  onInputCheckboxSelected(checkboxIdentifier: any, identifier, checked: any) {
    // 1. Find the step
    this.steps.forEach((step, index) => {
      if (step.identifier === identifier) {
        let replacement = step.replacementOriginal;
          // 2. Find checkbox selected
          step.checkboxes.forEach((checkbox: any) => {
            // Make step unique modifying identifier
            checkbox.wordToReplace = step.identifier + checkbox.identifier;
            replacement = replacement.replace(checkbox.identifier, checkbox.wordToReplace);
            if (checkbox.identifier === checkboxIdentifier) {
              // 3. Clean possible previously added steps, so we don't repeat them
              let lengthOfRestOfArray = this.steps.length - index;
              for (let i = 0; i < lengthOfRestOfArray; i++) {
                if (this.steps[(index + 1) + i] && this.steps[(index + 1) + i].identifier.includes(checkbox.identifier)) {
                  this.steps.splice((index + 1 + i), 1);
                }
              }
              // 2. Add steps
              if (checked) {
                checkbox.subSteps.forEach((subStep, subStepIndex) => {
                  this.steps.splice(((index + 1) + subStepIndex ), 0, subStep);
                });
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
                if (checkbox.checked) { isAnyCheck = true; };
              });
              console.log(isAnyCheck);
            }
          });
        }
      }
    });
    console.log(this.steps);
  }

  getStepsModel() {
    return this.steps;
  }
}
