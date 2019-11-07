import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {
  CommonsService,
  Form,
  FormService,
  UserService
} from '../../core';
import { SharedService } from './shared';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-certified-forms',
  templateUrl: './certified-forms.component.html'
})
export class CertifiedFormsComponent implements OnInit, OnDestroy {

  @ViewChild('subMenu') subMenu: ElementRef;
  @ViewChild('loginModal') loginModal: ElementRef;

  public form: Form = new Form();
  public originalForm: Form = new Form();
  public certifiedForm: any;
  public isAuth: boolean;
  public currentStep = 0;
  public updatingForm = false;

  constructor(
    private commonsService: CommonsService,
    private formsService: FormService,
    private userService: UserService,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.sharedService.currentForm.subscribe((form) => {
      if (this.commonsService.isObjectEmpty(form)) {
      } else {
        this.form = form;
        this.currentStep = form.currentStep;
      }
    });

    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
  }

  ngOnDestroy() {
    document.getElementsByTagName('html')[0].style.overflow = "";
  }

  topMenuNav(e: any) {
    this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
  }

  saveForm() {
    if (this.isAuth) {
      this.form.type = 'Certified';
      this.validateForm();
      this.formsService.save(this.form)
      .subscribe(
        form => {
          this.toastr.success('Has been saved', form.title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        },
        err => {
          console.log(err);
          this.toastr.error('An error has occured please try again', 'Error', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        }
      );
      // this.formService
      // .save(this.form)
      // .subscribe(
      //   form => {
      //     if (!this.updatingForm) {
      //       this.toastr.success('Has been created', form.title, {
      //         positionClass: 'toast-bottom-right',
      //         progressBar: true,
      //         progressAnimation: 'decreasing'
      //       });
      //       this.router.navigateByUrl('/create-form/edit/' + form.slug);
      //     } else {
      //       this.toastr.success('Has been updated', form.title, {
      //         positionClass: 'toast-bottom-right',
      //         progressBar: true,
      //         progressAnimation: 'decreasing'
      //       });
      //     }
      //     this.isSubmitting = false;
      //   },
      //   err => {
      //     this.errors = err;
      //     this.isSubmitting = false;
      //   }
      // );
    } else {
      window.sessionStorage[this.form.title] = JSON.stringify(this.form);
      this.router.navigate(['/auth/login'], {
        queryParams: {
          formPath: this.router.url.substring(this.router.url.lastIndexOf('/') + 1)
        }
      });
    }
  }

  toogleModal(modal: ElementRef) {
    this.commonsService.toggleModal(modal, true);
  }

  validateForm() {
    this.form.description = 'blabla';
    this.form.text = 'blaw';
  }

}
