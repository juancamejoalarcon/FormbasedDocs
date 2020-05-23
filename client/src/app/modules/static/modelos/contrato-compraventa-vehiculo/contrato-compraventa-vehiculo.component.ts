import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contrato-compraventa-vehiculo',
  templateUrl: './contrato-compraventa-vehiculo.component.html'
})
export class ContratoCompraventaVehiculoComponent implements OnInit {

  contractImageSrc: string;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.contractImageSrc = 'data:image/jpg;base64,' + data.image;
    });
  }

}
