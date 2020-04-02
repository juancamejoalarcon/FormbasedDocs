import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  LOCALE_ID,
  Inject,
  AfterViewInit
} from '@angular/core';
import {
  Router,
  NavigationEnd
} from '@angular/router';
import {
  UserService
} from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('navbar', {static: false}) navbar: ElementRef;
  @ViewChild('footer', {static: false}) footer: ElementRef;
  public isAuth: boolean;
  public includedUrlsForNavbar: Array<string> = [
    '/auth/login',
    '/auth/signup',
    '/auth/recover-password'
  ];
  public includedUrlsForFooter: Array<string> = [
    '/auth/login',
    '/auth/signup',
    '/auth/recover-password',
    'certified-forms',
    'create-form',
    'fill-form',
    'search-transaction'
  ];
  public languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Espanol' }
  ];

  constructor(
    @Inject(LOCALE_ID) protected localeId: string,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {

    this.userService.populate();
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.included(event['url'], this.includedUrlsForNavbar)) {
          this.navbar.nativeElement.hidden = true;
        } else {
          this.navbar.nativeElement.hidden = false;
        }

        if (this.included(event['url'], this.includedUrlsForFooter)) {
          this.footer.nativeElement.hidden = true;
        } else {
          this.footer.nativeElement.hidden = false;
        }
      }
    });
  }

  ngAfterViewInit() {
    this.onPageLoad();
  }

  included(url: string, includedUrls: Array<string>) {
    let isIncluded = false;
    includedUrls.forEach((includedUrl: string) => {
      if (url.includes(includedUrl)) {
        isIncluded = true;
      }
    });
    return isIncluded;
  }

  onPageLoad() {
    if (this.included(window.location.href, this.includedUrlsForNavbar)) {
      this.navbar.nativeElement.hidden = true;
    } else {
      this.navbar.nativeElement.hidden = false;
    }

    if (this.included(window.location.href, this.includedUrlsForFooter)) {
      this.footer.nativeElement.hidden = true;
    } else {
      this.footer.nativeElement.hidden = false;
    }
  }
}
