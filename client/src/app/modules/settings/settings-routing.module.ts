import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AuthGuard, AuthResolver } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    resolve: { initedInServer: AuthResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
