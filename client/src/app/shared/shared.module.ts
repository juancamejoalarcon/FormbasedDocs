import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ListErrorsComponent,
  LikesButtonComponent,
} from './components';
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
    QuillModule.forRoot()
  ],
  providers: [
    OdfEditorService,
    InputCommonsService
  ],
  declarations: [
    ListErrorsComponent,
    LikesButtonComponent,
    ShowAuthedDirective,
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
    IndicationsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListErrorsComponent,
    LikesButtonComponent,
    ShowAuthedDirective,
    InputTextComponent,
    InputRadioAComponent,
    NewRadioAComponent,
    InputRadioBComponent,
    NewRadioBComponent,
    InputRadioCComponent,
    NewRadioCComponent,
    CommentsComponent
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
