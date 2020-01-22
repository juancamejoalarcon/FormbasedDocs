import { TestBed } from '@angular/core/testing';

import { StepsService } from '../step.service';
import { CommonsService } from '../../../../../core';
import { DocCreatorService } from '../doc-creator.service';
import { steps } from './steps';

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

  it('<INPUT> should set the replacement value of object with (wordToReplace) equals to (wordToReplace passed as argument)', () => {
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

  it('<FOREACH> should make a copy of the step as many times as indicated', () => {
    const timesToRepeat = '2';
    const wordToReplace = 'id-unid-3';
    service.init(steps);
    service.buildForEach(timesToRepeat, wordToReplace, true);
  });
  
});
