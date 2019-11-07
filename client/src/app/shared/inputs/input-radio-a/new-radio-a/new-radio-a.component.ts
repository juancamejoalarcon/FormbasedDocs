import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StateService } from '../../../../core';

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
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.getRandomName();
    this.stateService.stateSubscribe().subscribe( (state: string) => {
      this.state = state;
      if (this.state === 'create-form') {
        // this.step.replacement = '';
        // this.divWhereIsDeleteButton.nativeElement.hidden = false;
      } else {
        // this.divWhereIsDeleteButton.nativeElement.hidden = true;
      }
    });
  }

  getRandomName() {
    if (this.optionalValues.randomName) {
      this.randomName = this.optionalValues.randomName;
    }
  }

  deleteElementDiv() {
    this.delete.nativeElement.remove();
  }

}
