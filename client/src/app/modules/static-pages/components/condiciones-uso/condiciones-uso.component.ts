import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-condiciones-uso',
  templateUrl: './condiciones-uso.component.html'
})
export class CondicionesUsoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.title = 'Automatik Docs | Condiciones de uso';
  }

  ngOnDestroy() {
    document.title = 'Automatik Docs';
  }

}
