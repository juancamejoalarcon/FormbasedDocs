import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  GuideComponent,
  CgvComponent,
  CondicionesUsoComponent,
  SilviaProfileComponent,
  PrivacyComponent
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
    path: 'silvia-profile',
    component: SilviaProfileComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
