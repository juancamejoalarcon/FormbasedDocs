import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public isAuth: boolean;
  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  constructor(
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
        if (event['url'] === '/auth/login' || event['url'] === '/auth/signup' || event['url'] === '/auth/recover-password' ||
            event['url'] === '/signup' || event['url'] === '/login' || event['url'] === '/recover-password') {
          this.navbar.nativeElement.hidden = true;
        } else if (event['url'].includes('/auth/login') || event['url'].includes('/auth/signup')) {
          this.navbar.nativeElement.hidden = true;
        } else {
          this.navbar.nativeElement.hidden = false;
        }

        if (event['url'].includes('certified-forms') || event['url'].includes('create-form') || event['url'].includes('fill-form')) {
          this.footer.nativeElement.hidden = true;
        } else if (event['url'].includes('/auth/login') || event['url'].includes('/auth/signup')) {
          this.footer.nativeElement.hidden = true;
        }
      }
    });

  }
}