import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { CookieService } from 'ngx-cookie-service';

import {
  ApiService,
  AuthGuard,
  CheckoutService,
  CommentsService,
  ConvertService,
  FormService,
  JwtService,
  ProfilesService,
  SearchService,
  TagsService,
  UserService,
  ComponentInjectorService
} from './http';
import {
  StepModelService,
  StateService,
  OdfCreatorService,
  PlainTextCreatorService,
  CommonsService,
  MetaService,
  AuthResolver
} from './singleton';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    CheckoutService,
    CommentsService,
    ConvertService,
    FormService,
    JwtService,
    ProfilesService,
    SearchService,
    TagsService,
    UserService,
    CommonsService,
    ComponentInjectorService,
    StepModelService,
    StateService,
    OdfCreatorService,
    PlainTextCreatorService,
    CookieService,
    MetaService,
    AuthResolver
  ],
  declarations: []
})
export class CoreModule { }
