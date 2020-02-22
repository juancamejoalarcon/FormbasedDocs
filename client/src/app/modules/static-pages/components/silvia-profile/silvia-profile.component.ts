import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-silvia-profile',
  templateUrl: './silvia-profile.component.html'
})
export class SilviaProfileComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    document.title = 'Automatik Docs | Silvia Camejo Alarcón';
  }

  ngOnDestroy() {
    document.title = 'Automatik Docs';
  }

}
