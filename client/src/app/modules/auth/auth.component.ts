import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Errors, UserService, CommonsService } from '../../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  form: FormGroup;
  queryParams: object = {};
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalMiddle') modalMiddle: ElementRef;
  @ViewChild('closeModalButton') closeModalButton: ElementRef;
  @ViewChild('privacyCheckbox') privacyCheckbox: ElementRef;
  @ViewChild('privacyError') privacyError: ElementRef;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private commonsService: CommonsService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'rememberme': ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'signup')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the signup page
      if (this.authType === 'signup') {
        this.form.addControl('username', new FormControl());
        this.form.addControl('repeatPassword', new FormControl());
        this.form.addControl('notifications', new FormControl());
      }
    });

    this.route.queryParams.subscribe(params => {
      if (!this.commonsService.isObjectEmpty(params)) {
        this.queryParams = params;
      }
    });

    this.checkIfUserHasScrolledToBottom();
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  checkIfUserHasScrolledToBottom() {
    this.modalMiddle.nativeElement.addEventListener('scroll', (e: any) => {
      if (e.srcElement.scrollHeight - e.srcElement.scrollTop === e.srcElement.clientHeight) {
          this.enablePrivacyButton();
          this.privacyCheckbox.nativeElement.disabled = false;
      }
    });
  }

  enablePrivacyButton() {
    this.closeModalButton.nativeElement.classList.remove('button-filled__disabled');
  }

  checkIfPrivacyChecked(e: any) {
    if (this.authType === 'signup') {
      e.preventDefault();
      if (!this.privacyCheckbox.nativeElement.checked) {
        this.privacyError.nativeElement.style.display = 'block';
      } else {
        this.privacyError.nativeElement.style.display = 'none';
        this.submitForm();
      }
    }
  }

  closeModalAndEnableCheckbox() {
    if (this.closeModalButton.nativeElement.classList.contains('button-filled__disabled')) {
        alert('Debes leer todas las condiciones');
    } else {
      this.toogleModal(this.modal.nativeElement);
    }
  }

  remindUserToReadPrivacyPolicy(e: any) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') {
      if (this.privacyCheckbox.nativeElement.disabled === true) {
        alert('Debes leer todas las condiciones');
      } else {
        this.privacyCheckbox.nativeElement.checked = !this.privacyCheckbox.nativeElement.checked;
      }
    }
    // When the screen is too big, the modal does not have any scroll, because it fits the screen
    // so we need to double check
    if (this.modalMiddle.nativeElement.scrollHeight === this.modalMiddle.nativeElement.clientHeight) {
        this.enablePrivacyButton();
        this.privacyCheckbox.nativeElement.disabled = false;
    }
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.form.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => {
        if (this.queryParams['formPath']) {
          this.router.navigateByUrl(`/certified-forms/${this.queryParams['formPath']}`);
        } else {
          this.router.navigateByUrl('/');
        }
      },
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
}
