import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonsService, GeneralPurposeService } from '../../../../core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  @ViewChild('nombre', { static: false }) nombre: ElementRef;
  @ViewChild('email', { static: false }) email: ElementRef;
  @ViewChild('mensaje', { static: false }) mensaje: ElementRef;
  public inputElements: string[] = ['nombre', 'email', 'mensaje'];

  constructor(
    private commonsService: CommonsService,
    private generalPurposeService: GeneralPurposeService
  ) { }

  ngOnInit(): void {
    this.commonsService.addTags('contact');
  }

  sendContact() {
    if (this.validateElements()) {
      const contactForm: any = {};
      this.inputElements.forEach((element: string) => {
        contactForm[element] = this[element].nativeElement.value;
      });
      this.commonsService.toggleSpinner();
      this.generalPurposeService.sendContactForm(contactForm).subscribe((emailSent) => {
        this.commonsService.toggleSpinner();
        if (emailSent) {
          this.commonsService.toastMessage('success', 'Su mensaje ha sido enviado', 'Enviado');
        } else {
          this.commonsService.toastMessage('error', 'Ha ocurrido un error, inténtelo de nuevo', 'Error');
        }
      }
      );;
    }
  }

  validateElements() {
    let isValid: boolean = true;
    this.inputElements.forEach((element: string) => {
      const nativeElement: HTMLInputElement = this[element].nativeElement;
      const borderType: string = element === 'mensaje' ? 'border' : 'borderBottom';
      const validEmail: boolean = element === 'email' ? this.commonsService.validateEmail(nativeElement.value) : true;
      if (!nativeElement.value || !validEmail) {
        nativeElement.style[borderType] = '3px solid #C44D58';
        this.commonsService.toastMessage('error', element + ' no válido', element);
        isValid = false;
      } else {
        nativeElement.style[borderType] = '3px solid #556270';
      }
    });
    return isValid;
  }

}
