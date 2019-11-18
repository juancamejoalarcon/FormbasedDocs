import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent, CgvComponent, CondicionesUsoComponent } from './components';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
