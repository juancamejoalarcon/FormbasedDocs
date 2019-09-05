import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User, UserService, FormListConfig, Form, FormService, SearchService, CommonsService } from '../../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html'
})
export class MyFormsComponent implements OnInit {

  @ViewChild('subMenu') subMenu: ElementRef;
  public listConfig: FormListConfig = new FormListConfig();
  public loadingQuery = false;
  public results: Array<any> = [];
  public limit: number = 20;
  public currentPage: number = 1;
  public noMoreForms: boolean = false;
  public user: User;
  public isDeleting = false;

  // Filled
  public listConfigFilled: FormListConfig = new FormListConfig();
  public loadingQueryFilled = false;
  public resultsFilled: Array<any> = [];
  public limitFilled: number = 20;
  public currentPageFilled: number = 1;
  public noMoreFormsFilled: boolean = false;

  constructor(
    private userService: UserService,
    private searchService: SearchService,
    private formService: FormService,
    private toastr: ToastrService,
    private commonsService: CommonsService
  ) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.loadingQuery = true;
    this.listConfig.orderBy = 'Date';
    this.setListTo('all');
    this.searchService.searchProfile(this.listConfig)
    .subscribe(forms => {
       this.loadingQuery = false;
       this.results = forms;
   });
    // Filled
    this.loadingQueryFilled = true;
    this.listConfigFilled.orderBy = 'Date';
    this.setListToFilled();
    this.searchService.searchFilledForms(this.listConfigFilled)
    .subscribe(forms => {
        this.loadingQueryFilled = false;
        this.resultsFilled = forms;
    });
  }

  setListTo(type: string = '') {
    // Takes all forms
    this.listConfig = {
      type: type,
      limit: this.limit,
      orderBy: 'Date',
      offset: (this.limit * (this.currentPage - 1)),
      query: '',
      author: this.user.username
    };
  }

  setListToFilled() {
    // Takes all forms
    this.listConfigFilled = {
      type: 'Filled',
      limit: this.limit,
      orderBy: 'Date',
      offset: (this.limit * (this.currentPage - 1)),
      query: '',
      filledBy: this.user.username,
    };
  }

  moreForms() {
    this.loadingQuery = true;
    this.setPageTo();
    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.listConfig.limit = this.limit;
      this.listConfig.offset =  (this.limit * (this.currentPage - 1));
    }
    this.searchService.searchProfile(this.listConfig).subscribe(forms => {
      if (forms.length !== 0) {
        this.results = this.results.concat(forms);
      } else {
        this.noMoreForms = true;
      }
       this.loadingQuery = false;
   });
  }

  moreFormsFilled() {
    this.loadingQueryFilled = true;
    this.setPageToFilled();
    // Create limit and offset filter (if necessary)
    if (this.limitFilled) {
      this.listConfigFilled.limit = this.limit;
      this.listConfigFilled.offset =  (this.limitFilled * (this.currentPageFilled - 1));
    }
    this.searchService.searchFilledForms(this.listConfigFilled).subscribe(forms => {
      if (forms.length !== 0) {
        this.resultsFilled = this.resultsFilled.concat(forms);
      } else {
        this.noMoreFormsFilled = true;
      }
       this.loadingQueryFilled = false;
   });
  }

  setPageTo() {
    this.currentPage += 1;
  }

  setPageToFilled() {
    this.currentPageFilled += 1;
  }

  setOrder(order: string) {
    this.loadingQuery = true;
    this.listConfig.offset = 0;
    this.currentPage = 1;
    this.results = [];
    this.noMoreForms = false;
    this.listConfig.orderBy = order;
    this.searchService.searchProfile(this.listConfig).subscribe(forms => {
        this.loadingQuery = false;
        this.results = forms;
      });
  }

  setOrderFilled(order: string) {
    this.loadingQueryFilled = true;
    this.listConfigFilled.offset = 0;
    this.currentPageFilled = 1;
    this.resultsFilled = [];
    this.noMoreFormsFilled = false;
    this.listConfigFilled.orderBy = order;
    this.searchService.searchFilledForms(this.listConfigFilled).subscribe(forms => {
        this.loadingQueryFilled = false;
        this.resultsFilled = forms;
      });
  }

  deleteForm(form: Form) {
    if (confirm('Are you sure you want to delete?')) {
      this.isDeleting = true;
      this.formService.destroy(form.slug)
        .subscribe(
          success => {
            this.toastr.success('Deleted', form.title, {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing'
            });
            this.results = this.results.filter(currentForm => {
              return currentForm !== form;
            });
          }
        );
    }
  }

  deleteFilled(form: Form) {
    if (confirm('Are you sure you want to delete?')) {
      this.isDeleting = true;
      this.formService.destroy(form.slug)
        .subscribe(
          success => {
            this.toastr.success('Deleted', form.title, {
              positionClass: 'toast-bottom-right',
              progressBar: true,
              progressAnimation: 'decreasing'
            });
            this.resultsFilled = this.resultsFilled.filter(currentForm => {
              return currentForm !== form;
            });
          }
        );
    }
  }

  updateForm(e: any, form: Form) {
    form[e.srcElement.value] = e.srcElement.checked;
    this.formService
    .save(form)
    .subscribe(
      formUpdated => {
          this.toastr.success('Has been Updated', formUpdated.title, {
            positionClass: 'toast-bottom-right',
            progressBar: true,
            progressAnimation: 'decreasing'
          });
      }
    );
  }


  // UTILITY
  topMenuNav(e: any) {
    this.commonsService.subMenuNav(e, this.subMenu.nativeElement);
  }

}
