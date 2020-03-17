import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionMenuComponent } from './add-question-menu.component';

describe('AddQuestionMenuComponent', () => {
  let component: AddQuestionMenuComponent;
  let fixture: ComponentFixture<AddQuestionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
