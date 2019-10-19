import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule',
  },
    {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
  },
  {
    path: 'certified-forms',
    loadChildren: './modules/certified-forms/certified-forms.module#CertifiedFormsModule',
  },
  {
    path: 'create-form',
    loadChildren: './modules/create-form/create-form.module#CreateFormModule',
  },
  {
    path: 'fill-form',
    loadChildren: './modules/fill-form/fill-form.module#FillFormModule',
  },
  {
    path: 'my-forms',
    loadChildren: './modules/my-forms/my-forms.module#MyFormsModule',
  },
  {
    path: 'settings',
    loadChildren: './modules/settings/settings.module#SettingsModule',
  },
  {
    path: 'profile',
    loadChildren: './modules/profile/profile.module#ProfileModule',
  },
  {
    path: 'static-pages',
    loadChildren: './modules/static-pages/static-pages.module#StaticPagesModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules;
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}