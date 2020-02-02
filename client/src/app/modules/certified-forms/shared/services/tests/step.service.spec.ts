import { TestBed } from '@angular/core/testing';

import { StepsService } from '../step.service';
import { CommonsService } from '../../../../../core';
import { DocCreatorService } from '../doc-creator.service';
import { steps } from './steps';
import { stepsBeforeForeach } from './steps-before-foreach.mock-spec';
import { stepsAfterForeach } from './steps-after-foreach.mock-spec';
import { stepsBeforeRadioC } from './steps-before-radioC.mock-spec';
import { stepsAfterRadioC } from './steps-after-radioC.mock-spec';
import { stepsBeforeSetInitialState } from './steps-before-setInitialState.mock-spec';
import { stepsAfterSetInitialState } from './steps-after-setInitialState.mock-spec';

fdescribe('StepService', () => {

  let service: StepsService;

  beforeEach(() => {
    const spyCommonsService = jasmine.createSpyObj('CommonsService', ['numeroALetras']);
    const spyDocCreatorService = jasmine.createSpyObj('DocCreatorService', ['buildDocument']);

    TestBed.configureTestingModule({
      providers: [
        StepsService,
        { provide: CommonsService, useValue: spyCommonsService },
        { provide: DocCreatorService, useValue: spyDocCreatorService }
      ]
    });

    service = TestBed.get(StepsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init steps', () => {
    service.init(steps);
    expect(service.getStepsModel()).toEqual(steps);
  });

  it('<INPUT> should modify the steps as expected', () => {
    const replacement = 'Input test';
    const wordToReplace = 'id-unid-1';
    service.init(steps);
    service.input(replacement, wordToReplace, false);
    let modifiedStep: any;
    service.getStepsModel().forEach((step) => {
      if (step.wordToReplace === wordToReplace) {
        modifiedStep = step;
      }
    });
    expect(modifiedStep.replacement).toEqual(replacement);
    expect(modifiedStep.isFocused).toBe(true);

  });

  it('<FOREACH> should modify the steps as expected', () => {
    const timesToRepeat = '4';
    const wordToReplace = 'id-unid-3';
    service.init(stepsBeforeForeach);
    service.buildForEach(timesToRepeat, wordToReplace, true);
    expect(service.getStepsModel()).toEqual(stepsAfterForeach);
  });

  it('<RADIOC> should modify the steps as expected', () => {
    const radioSelectedId = 'id-unid-3_1_opA';
    const wordToReplace = 'id-unid-3id-unid-3_100';
    service.init(stepsBeforeRadioC);
    service.onInputRadioCSelected(radioSelectedId, wordToReplace, true);
    expect(service.getStepsModel()).toEqual(stepsAfterRadioC);
  });

  // it('<SETINITIALSTATE> should modify the steps as expected', () => {
  //   service.init(stepsBeforeSetInitialState);
  //   service.setInitialState();
  //   expect(service.getStepsModel()).toEqual(stepsAfterSetInitialState);
  // });
});
