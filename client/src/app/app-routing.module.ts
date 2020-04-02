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
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
  },
    {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'certified-forms',
    loadChildren: () => import('./modules/certified-forms/certified-forms.module').then(m => m.CertifiedFormsModule),
  },
  {
    path: 'create-form',
    loadChildren: () => import('./modules/create-form/create-form.module').then(m => m.CreateFormModule),
  },
  {
    path: 'fill-form',
    loadChildren: () => import('./modules/fill-form/fill-form.module').then(m => m.FillFormModule),
  },
  {
    path: 'my-forms',
    loadChildren: () => import('./modules/my-forms/my-forms.module').then(m => m.MyFormsModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'static-pages',
    loadChildren: () => import('./modules/static-pages/static-pages.module').then(m => m.StaticPagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules;
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}