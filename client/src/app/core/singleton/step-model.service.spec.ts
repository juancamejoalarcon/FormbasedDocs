import { TestBed } from '@angular/core/testing';

import { StepModelService } from './step-model.service';
import { OdfCreatorService } from './odf-creator.service';
import { PlainTextCreatorService } from './plain-text-creator.service';
import { StateService } from './state.service';

describe('StepModelService', () => {

  let service: StepModelService;
  const steps: Array<any> = [
    {
      prueba: 'prueba'
    }
  ];

  beforeEach(() => {
    const spyOdfCreator = jasmine.createSpyObj('OdfCreatorService', ['buildDocument']);
    const spyPlainTextCreator = jasmine.createSpyObj('PlainTextCreatorService', ['buildDocument']);

    TestBed.configureTestingModule({
      providers: [
        StepModelService,
        StateService,
        { provide: OdfCreatorService, useValue: spyOdfCreator },
        { provide: PlainTextCreatorService, useValue: spyPlainTextCreator }
      ]
    });

    service = TestBed.get(StepModelService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init steps', () => {
    service.init(steps, 'office');
    expect(service.getStepsModel()).toEqual(steps);
  });
  
});
