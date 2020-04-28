import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, CommentsService, Comment } from '../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: []
})
export class CommentsComponent implements OnInit {

  @Input() form: Form;
  @ViewChild('commentTextArea', {static: false}) commentTextArea: ElementRef;
  public isSubmitting = false;
  public comments: Comment[];
  public commentsLength: any;
  public orderBy: any;

  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private commentsService: CommentsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.populateComments();
  }

  populateComments() {
    this.commentsService.getAll(this.form.slug, this.orderBy)
      .subscribe(comments => {
        this.comments = comments;
        this.commentsLength = comments.length;
      }
    );
  }

  setOrder(order: string) {
    this.orderBy = order;
    this.populateComments();
  }

  addComment(input: string) {
    if (input !== '') {
      this.isSubmitting = true;
      this.commentsService
        .add(this.form.slug, input)
        .subscribe(
          comment => {
            this.comments.unshift(comment);
            this.isSubmitting = false;
            this.toastr.success('Comentario añadido', '', {
                positionClass: 'toast-bottom-right',
                progressBar: true,
                progressAnimation: 'decreasing'
              });
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

  onDeleteComment(comment: Comment) {
    this.commentsService.destroy(comment.id, this.form.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
          this.toastr.success('Comment deleted', '', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        }
      );
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

}
