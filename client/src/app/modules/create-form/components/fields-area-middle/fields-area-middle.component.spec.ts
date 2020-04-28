import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsAreaMiddleComponent } from './fields-area-middle.component';

describe('FieldsAreaMiddleComponent', () => {
  let component: FieldsAreaMiddleComponent;
  let fixture: ComponentFixture<FieldsAreaMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsAreaMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsAreaMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
