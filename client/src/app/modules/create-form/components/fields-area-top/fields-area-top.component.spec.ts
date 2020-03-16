import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsAreaTopComponent } from './fields-area-top.component';

describe('FieldsAreaTopComponent', () => {
  let component: FieldsAreaTopComponent;
  let fixture: ComponentFixture<FieldsAreaTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsAreaTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsAreaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
