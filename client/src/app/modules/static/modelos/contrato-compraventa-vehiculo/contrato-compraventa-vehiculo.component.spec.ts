import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoCompraventaVehiculoComponent } from './contrato-compraventa-vehiculo.component';

describe('ContratoCompraventaVehiculoComponent', () => {
  let component: ContratoCompraventaVehiculoComponent;
  let fixture: ComponentFixture<ContratoCompraventaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoCompraventaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoCompraventaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
