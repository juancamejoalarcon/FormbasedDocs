import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StateService, StepModelService } from '../../../../core';

@Component({
    selector: 'app-new-radio-a',
    templateUrl: './new-radio-a.component.html'
})
export class NewRadioAComponent implements OnInit {

  @Input() field: any;
  @Input() optionalValues: any;
  @ViewChild('delete') delete: ElementRef;

  public state: string;
  public randomName: string;

  constructor(
    private stateService: StateService,
    private stepModelService: StepModelService
  ) { }

  ngOnInit() {
    this.stateService.stateSubscribe().subscribe( (state: string) => {
      this.state = state;
    });

    if (this.optionalValues.identifier) {
      this.randomName = 'name' + this.optionalValues.identifier;
      this.pushNewRadio();
    } else {

    }
  }

  pushNewRadio() {
    this.stepModelService.getStepsModel().forEach((step: any) => {
      if (step.identifier === this.optionalValues.identifier) {
        console.log(step);
      }
    })
  }

  deleteElementDiv() {
    this.delete.nativeElement.remove();
  }

}
