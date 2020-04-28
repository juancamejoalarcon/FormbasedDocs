import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Comment, User, UserService, CommentsService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-response',
  templateUrl: './comment-response.component.html'
})
export class CommentResponseComponent implements OnInit {

  @Input() comment: any;
  @Input() slug: string;
  @Output() deleteComment = new EventEmitter<boolean>();
  @ViewChild('commentBodyLong', {static: false}) commentBodyLong: ElementRef;
  @ViewChild('commentBodyShort', {static: false}) commentBodyShort: ElementRef;
  @ViewChild('editTextArea', {static: false}) editTextArea: ElementRef;
  public showMore = false;
  public maxLenght = 250;
  public canModify: boolean;
  public isSubmitting = false;
  public isEditing = false;

  constructor(
    private userService: UserService,
    private commentsService: CommentsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    );
    this.commentBody(false);
  }

  commentBody (show: boolean) {
    this.showMore = show;
    if (this.comment.body.length > this.maxLenght) {
      if (!this.showMore) {
        this.commentBodyLong.nativeElement.style.display = 'none';
        this.commentBodyShort.nativeElement.style.display = 'block';
      } else {
        this.commentBodyLong.nativeElement.style.display = 'block';
        this.commentBodyShort.nativeElement.style.display = 'none';
      }
    } else {
      this.commentBodyLong.nativeElement.style.display = 'block';
      this.commentBodyShort.nativeElement.style.display = 'none';
    }
  }

  updateComment(input: string) {
    this.isSubmitting = true;
    this.commentsService
      .updateComment(this.slug, input, this.comment._id)
      .subscribe(
        comment => {
          this.comment.body = comment.body;
          this.isEditing = false;
          this.editTextArea.nativeElement.value = '';
        },
        errors => {
          this.isSubmitting = false;
                this.toastr.error(errors, 'Comment error', {
                  positionClass: 'toast-bottom-right',
                  progressBar: true,
                  progressAnimation: 'decreasing'
              });
        }
      );
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }

}
