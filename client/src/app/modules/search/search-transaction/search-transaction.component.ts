import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormService, CommonsService } from '../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html'
})
export class SearchTransactionComponent implements OnInit, OnDestroy {

  @ViewChild('searchTransactionDiv', {static: true}) searchTransactionDiv: ElementRef;
  @ViewChild('transactionIdInput', {static: false}) transactionIdInput: ElementRef;
  public transactionId: string;

  constructor(
    private formService: FormService,
    private commonsService: CommonsService,
    private router: Router
  ) { }

  ngOnInit() {
    window.addEventListener('resize', this.resizeDiv.bind(this));
    this.resizeDiv();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeDiv.bind(this));
  }

  resizeDiv() {
    const menuHeight: number = document.querySelector('.nav').clientHeight;
    this.searchTransactionDiv.nativeElement.style.height = (window.innerHeight - menuHeight) + 'px';
  }

  findTransaction() {
    // pt0y2tta
    this.formService.getPaidCertifiedForm(this.transactionId).subscribe((data: any) => {
      if (data.certifiedForm) {
        this.router.navigate([('/certified-forms/' + data.certifiedForm.id)], { queryParams: { transactionId: this.transactionId } });
        this.commonsService.toastMessage('success', 'Transacción encontrada', 'Transacción encontrada');
      } else if (data.transactionNotFound) {
        this.transactionIdInput.nativeElement.style.borderBottom = '3px solid #C44D58';
        this.commonsService.toastMessage('error', 'El ID de su transacción no existe', 'ID no encontrado');
      } else if (data.formExpired) {
        this.transactionIdInput.nativeElement.style.borderBottom = '3px solid #C44D58';
        this.commonsService.toastMessage('error', 'El período de 15 días para cambiar el documento ha terminado', 'Transaccion caducada');
      }
    });
  }
}
