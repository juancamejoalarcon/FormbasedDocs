import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { UserService, CommonsService } from '../core';

@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef,
    private commonsService: CommonsService
  ) {}

  condition: boolean;
  alreadyAuth = false;

  ngOnInit() {
    if (this.commonsService.isBrowser() && !this.userService.isAuth) {
      this.userService.isAuthenticated.subscribe(
        (isAuthenticated) => {
          if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
            if (!this.alreadyAuth) {
              this.viewContainer.createEmbeddedView(this.templateRef);
              this.alreadyAuth = true;
            }
          } else {
            if (this.alreadyAuth) {
              this.viewContainer.clear();
              this.alreadyAuth = false;
            }
          }
        }
      );
    }
  }

  @Input() set appShowAuthed(condition: boolean) {
    this.condition = condition;
  }

}
