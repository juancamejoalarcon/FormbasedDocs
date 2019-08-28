import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Comment, User, UserService, CommentsService } from '../../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @Input() slug: string;
  @Output() deleteComment = new EventEmitter<boolean>();
  @ViewChild('commentBodyLong') commentBodyLong: ElementRef;
  @ViewChild('commentBodyShort') commentBodyShort: ElementRef;
  @ViewChild('commentTextArea') commentTextArea: ElementRef;
  @ViewChild('editTextArea') editTextArea: ElementRef;
  public showMore = false;
  public responsesAreShowing = false;
  public maxLenght = 250;
  public canModify: boolean;
  public isAuth = false;
  public isSubmitting = false;
  public isEditing = false;
  public currentUserData: any;

  constructor(
    private elementRef: ElementRef,
    private userService: UserService,
    private commentsService: CommentsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
        this.isAuth = true;
        this.currentUserData = userData;
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

  likeComment() {
    this.commentsService.like(this.slug, this.comment.id).subscribe(comment => {
      this.comment.liked = comment.liked;
      this.comment.likesCount = comment.likesCount;
    });
  }

  dislikeComment() {
    this.commentsService.dislike(this.slug, this.comment.id).subscribe(comment => {
      this.comment.liked = comment.liked;
      this.comment.likesCount = comment.likesCount;
    });
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }

  showResponses(responsesAreShowing: boolean) {
    this.responsesAreShowing = responsesAreShowing;
  }

  addCommentResponse(input: string) {
    if (input !== '') {
      this.isSubmitting = true;
      this.commentsService
        .responseToComment(this.slug, input, this.comment.id)
        .subscribe(
          comment => {
            comment['_id'] = comment.id;
            comment.author = this.currentUserData;
            this.comment.responses.push(comment);
            this.isSubmitting = false;
            this.commentTextArea.nativeElement.value = '';
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
    } else {
      this.toastr.error('Comment is empty', '', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    }
  }

  updateComment(input: string) {
    this.isSubmitting = true;
    this.commentsService
      .updateComment(this.slug, input, this.comment.id)
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

  onDeleteComment(comment: any) {
    this.commentsService.destroy(comment._id, this.slug)
      .subscribe(
        success => {
          this.comment.responses = this.comment.responses.filter((item) => item !== comment);
          this.toastr.success('Comment deleted', '', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        }
      );
  }

}
