import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ListErrorsComponent,
  LikesButtonComponent,
  LoadingSpinnerComponent,
  PrivacyPolicyComponent
} from './components';
import { ExternalLinkDirective } from './directives';
import { ShowAuthedDirective } from './show-authed.directive';
import { QuillModule } from 'ngx-quill';
import {
  InputTextComponent,
  // InputDateComponent,
  InputRadioAComponent,
  NewRadioAComponent,
  InputRadioBComponent,
  NewRadioBComponent,
  InputRadioCComponent,
  NewRadioCComponent,
  HiddenInputsComponent,
  IndicationsComponent,
  InputCommonsService
} from './inputs';
import { ModalContentComponent } from './inputs/input-radio-c/new-radio-c/modal-content/modal-content.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentResponseComponent } from './comments/comment-response/comment-response.component';

import {
  OdfEditorService
} from './services';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule
  ],
  providers: [
    OdfEditorService,
    InputCommonsService
  ],
  declarations: [
    ListErrorsComponent,
    LikesButtonComponent,
    ShowAuthedDirective,
    ExternalLinkDirective,
    InputTextComponent,
    InputRadioAComponent,
    NewRadioAComponent,
    InputRadioBComponent,
    NewRadioBComponent,
    InputRadioCComponent,
    NewRadioCComponent,
    ModalContentComponent,
    HiddenInputsComponent,
    CommentsComponent,
    CommentComponent,
    CommentResponseComponent,
    IndicationsComponent,
    LoadingSpinnerComponent,
    PrivacyPolicyComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListErrorsComponent,
    LikesButtonComponent,
    ShowAuthedDirective,
    ExternalLinkDirective,
    InputTextComponent,
    InputRadioAComponent,
    NewRadioAComponent,
    InputRadioBComponent,
    NewRadioBComponent,
    InputRadioCComponent,
    NewRadioCComponent,
    CommentsComponent,
    LoadingSpinnerComponent,
    PrivacyPolicyComponent
  ],
  entryComponents: [
    InputTextComponent,
    InputRadioAComponent,
    NewRadioAComponent,
    InputRadioBComponent,
    NewRadioBComponent,
    InputRadioCComponent,
    NewRadioCComponent,
    HiddenInputsComponent
  ]
})
export class SharedModule { }
