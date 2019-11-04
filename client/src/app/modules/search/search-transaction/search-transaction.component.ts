import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormService, CommonsService } from '../../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html'
})
export class SearchTransactionComponent implements OnInit, OnDestroy {

  @ViewChild('searchTransactionDiv') searchTransactionDiv: ElementRef;
  @ViewChild('transactionIdInput') transactionIdInput: ElementRef;
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
        this.commonsService.toastMessage('success', 'Transaction found', 'Transaction found');
      } else if (data.transactionNotFound) {
        this.transactionIdInput.nativeElement.style.borderBottom = '3px solid #C44D58';
        this.commonsService.toastMessage('error', 'Transaction Id does not exist', 'Transaction id not found');
      } else if (data.formExpired) {
        this.transactionIdInput.nativeElement.style.borderBottom = '3px solid #C44D58';
        this.commonsService.toastMessage('error', 'The period of 30 days to change the document has expired', 'Transaction expired');
      }
    });
  }
}
