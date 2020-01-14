import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User, UserService } from '../../core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('imageSrc') imageSrc: ElementRef;
  user: User = new User();
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting: boolean = false;
  modalStatus: string;
  oldPass: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    // create form group using the form builder
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      email: '',
      description: '',
      nameAndSurname: '',
      contactInformation: '',
      dateOfBirth: '',
      companyName: '',
    });
  }

  ngOnInit() {
    // Make a fresh copy of the current user's object to place in editable form fields
    (<any>Object).assign(this.user, this.userService.getCurrentUser());
    // Fill the form
    console.log(this.user);
    this.settingsForm.patchValue(this.user);
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      const fileSize = file.size / 1024 / 1024; // in MB
      if (this.hasExtension(event.target.value, ['.jpg', '.gif', '.png'])) {
        if ( fileSize > 1) {
          event.target.value = '';
          this.toastr.error('File is bigger than 1 MB', 'Error', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        } else {
          reader.readAsDataURL(file);
          reader.onload = (e: any) => {

            var image = new Image();
            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;
            image.onload = () => {
              if (image.height === image.width) {
                this.settingsForm.patchValue({
                  image: reader.result
                });
                this.imageSrc.nativeElement.src = reader.result;
              } else {
                event.target.value = '';
                this.toastr.error('Size error width and height must be equal', 'Error', {
                  positionClass: 'toast-bottom-right',
                  progressBar: true,
                  progressAnimation: 'decreasing'
                });
              }
            }
        };
        }
      } else {
        event.target.value = '';
        this.toastr.error('File must be of type jpg gif or png', 'Error', {
          positionClass: 'toast-bottom-right',
          progressBar: true,
          progressAnimation: 'decreasing'
        });
      }
    }
  }

  hasExtension(element, exts) {
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(element);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    const updatedUser = this.validation(this.settingsForm.value);

    console.log(updatedUser);

    this.userService
    .update(updatedUser)
    .subscribe( newUser => {
      this.toastr.success('User updated', '', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    },
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  validation(values: Object) {
    const updatedUser = {};
    const entries = Object.entries(values);
    for (const [key, value] of entries) {
      if (values[key] !== this.user[key]) {
        updatedUser[key] = value;
        this.user[key] = value;
      }
    }
    return updatedUser;
  }

  // updateUser(values: Object) {
  //   console.log(values);
  //   (<any>Object).assign(this.user, values);
  // }

  toggleModal(modalStatus: string = '') {
    this.modalStatus = modalStatus;
    this.modal.nativeElement.classList.toggle('show-modal');
  }

  changePassword(oldPass: string, newPass: string) {
    if (oldPass === newPass) {
      this.toastr.error('Old and new password are the same', '', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    } else if (oldPass === '' || newPass === '') {
      this.toastr.error('Fields cannot be empty', '', {
        positionClass: 'toast-bottom-right',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    } else {
      this.userService
      .changePassword({
        oldPassword : oldPass,
        newPassword : newPass,
      })
      .subscribe( updatedUser => {
        if (updatedUser.invalidPassword) {
          this.toastr.error('Current password is wrong', '', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        } else {
          this.toggleModal();
          this.toastr.success('User updated', '', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        }
      },
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
    }
  }

  removeAccount(pass: string) {
    if (confirm(`¿Seguro que deseas eliminar tu usuario? Una vez eliminado no habrá posibilidad de recuperarlo, así como tampoco podrás recuperar ninguno de los documentos creados con este usuario`)) {
      this.userService
      .removeAccount(pass)
      .subscribe( data => {
        if (data.invalidPassword) {
          this.toastr.error('Contraseña incorrecta', '', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
        } else if (data.userRemoved) {
          this.toastr.success('Usuario eliminado', '', {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
          this.logout();
        }
      },
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
    }
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
