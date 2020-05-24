import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  GuideComponent,
  CgvComponent,
  CondicionesUsoComponent,
  ContactComponent,
  SilviaProfileComponent,
  PrivacyComponent,
  ModelosComponent,
  ModelosResolver
} from './components';

const routes: Routes = [
  {
    path: 'guide',
    component: GuideComponent,
  },
  {
    path: 'cgv',
    component: CgvComponent,
  },
  {
    path: 'condiciones-uso',
    component: CondicionesUsoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'silvia-profile',
    component: SilviaProfileComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'modelos/:id',
    component: ModelosComponent,
    resolve: {
      form: ModelosResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
