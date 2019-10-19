import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent, CgvComponent } from './components';

const routes: Routes = [
  {
    path: 'guide',
    component: GuideComponent,
  },
  {
    path: 'cgv',
    component: CgvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
