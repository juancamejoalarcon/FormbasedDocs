import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormsComponent } from './my-forms.component';
import { AuthResolver } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: MyFormsComponent,
    resolve: { initedInServer: AuthResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFormsRoutingModule { }
