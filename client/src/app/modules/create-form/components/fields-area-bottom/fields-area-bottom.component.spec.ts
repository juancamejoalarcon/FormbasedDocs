import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsAreaBottomComponent } from './fields-area-bottom.component';

describe('FieldsAreaBottomComponent', () => {
  let component: FieldsAreaBottomComponent;
  let fixture: ComponentFixture<FieldsAreaBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsAreaBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsAreaBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
