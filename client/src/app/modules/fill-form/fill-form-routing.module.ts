import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillFormComponent } from './fill-form.component';
import { FillFormResolver } from './fill-form-resolver.service';
import { AuthGuard } from '../../core';

const routes: Routes = [
  {
    path: ':slug',
    component: FillFormComponent,
  resolve: {
    form: FillFormResolver
  }
},
{
  path: 'edit',
  component: FillFormComponent,
  canActivate: [AuthGuard]
},
{
    path: 'edit/:slug',
    component: FillFormComponent,
    canActivate: [AuthGuard],
  resolve: {
    form: FillFormResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FillFormRoutingModule { }
