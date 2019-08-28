import { Component, OnInit, Input } from '@angular/core';
import { Form, FormService, UserService, User } from '../../../core';

@Component({
  selector: 'app-likes-button',
  templateUrl: './likes-button.component.html'
})
export class LikesButtonComponent implements OnInit {

  @Input() form: Form;
  constructor(
    private formsService: FormService,
    private userService: UserService
  ) { }

  ngOnInit() {}

  likeForm() {
    this.form.liked = true;
    this.form.likesCount += 1;
    this.formsService.like(this.form.slug).subscribe(
      form => {
        this.form.liked = true;
      }
    );
  }

  disLikeForm() {
    this.form.liked = false;
    this.form.likesCount -= 1;
    this.formsService.disLike(this.form.slug).subscribe(
      data => {
        this.form.liked = false;
      }
    );
  }

}
