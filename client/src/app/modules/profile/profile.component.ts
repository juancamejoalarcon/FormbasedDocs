import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, FormListConfig, Form, SearchService, } from '../../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public listConfig: FormListConfig = new FormListConfig();
  public loadingQuery = false;
  public results: Array<any> = [];
  public limit: number = 10;
  public currentPage: number = 1;
  public noMoreForms: boolean = false;

  public user: User;
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.user = data.user;
      }
    );
    this.loadingQuery = true;
    this.listConfig.orderBy = 'Date';
    this.setListTo('all');
    this.searchService.searchProfile(this.listConfig)
    .subscribe(forms => {
       this.loadingQuery = false;
       this.results = forms;
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

  @HostListener('window:scroll', []) onScroll(): void {
    if (!this.loadingQuery && this.noMoreForms === false) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.moreForms();
      }
    }
  }

  setPageTo() {
    this.currentPage += 1;
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

}
