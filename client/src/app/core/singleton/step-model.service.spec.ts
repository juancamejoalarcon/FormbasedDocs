import { TestBed } from '@angular/core/testing';

import { StepModelService } from './step-model2.service';

describe('StepModelService', () => {

  let service: StepModelService;
  const steps: Array<any> = [
    {
      prueba: 'prueba'
    }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [StepModelService]
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
