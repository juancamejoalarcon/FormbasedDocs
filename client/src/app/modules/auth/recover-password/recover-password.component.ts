import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonsService, UserService } from '../../../core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html'
})
export class RecoverPasswordComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('invalidError') invalidError: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  @ViewChild('repeatPasswordInput') repeatPasswordInput: ElementRef;
  @ViewChild('confirmationMessage') confirmationMessage: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('sendLinkButton') sendLinkButton: ElementRef;
  public email: string;
  public password: string;
  public repeatPassword: string;
  public token: string;
  public isResetPassword = false;

  constructor(
    private commonsService: CommonsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.token) {
        this.token = params.token;
        this.isResetPassword = true;
      } else {
        this.isResetPassword = false;
      }
    });
  }

  sendEmail() {
    if (this.commonsService.validateEmail(this.email)) {
      this.userService.forgotPassword(this.email).subscribe((data) => {
        if (data.emailSent) {
          this.commonsService.toastMessage('success', 'Check your email for further instructions', 'Email sent');
          this.emailInput.nativeElement.style.borderBottom = '3px solid #556270';
          this.invalidError.nativeElement.classList.add('d-none');
          this.confirmationMessage.nativeElement.classList.remove('d-none');
          this.title.nativeElement.classList.add('d-none');
          this.emailInput.nativeElement.classList.add('d-none');
          this.sendLinkButton.nativeElement.classList.add('d-none');
        } else if (data.emailNotFound) {
          this.commonsService.toastMessage('error', 'Account with this email could not be found', 'Email not found');
          this.emailInput.nativeElement.style.borderBottom = '3px solid #C44D58';
          this.invalidError.nativeElement.classList.remove('d-none');
        }
      });
    } else {
      this.emailInput.nativeElement.style.borderBottom = '3px solid #C44D58';
      this.invalidError.nativeElement.classList.remove('d-none');
      this.commonsService.toastMessage('error', 'Validation error', 'Invalid email');
    }
  }

  resetPassword() {
    if (this.validatePassword()) {
      this.userService.resetPassword(this.token, this.password, this.repeatPassword)
      .subscribe((data) => {
        console.log(data);
        if (data.passwordRestored) {
          this.commonsService.toastMessage('success', 'Try to log in', 'Contraseña restaurada');
          this.router.navigate(['/auth/login']);
        } else if (data.noToken) {
          this.router.navigate(['/auth/recover-password']);
          this.commonsService.toastMessage('error', 'El token expiró o no existe', 'Token error');
        } else {
          this.commonsService.toastMessage('error', 'Error', 'Ha ocurrido un error');
        }
      });
    }
  }

  validatePassword() {
    if (!this.password || this.password  === '') {
      this.commonsService.toastMessage('error', 'Password is empty', 'Empty field');
      this.passwordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
      return false;
    } else if (!this.repeatPassword || this.repeatPassword === '') {
      this.commonsService.toastMessage('error', 'Repeat password is empty', 'Empty field');
      this.repeatPasswordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
      return false;
    } else if (this.password !== this.repeatPassword) {
      this.passwordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
      this.repeatPasswordInput.nativeElement.style.borderBottom = '3px solid #C44D58';
      this.commonsService.toastMessage('error', '', 'Fields do not match');
      return false;
    }

    this.passwordInput.nativeElement.style.borderBottom = '3px solid #556270';
    this.repeatPasswordInput.nativeElement.style.borderBottom = '3px solid #556270';

    return true;
  }

}
