import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SharedService {
  private currentFormSubject = new BehaviorSubject<any>({});
  public currentForm = this.currentFormSubject.asObservable().pipe(distinctUntilChanged());

  // private isFormDirtySubject = new ReplaySubject<boolean>(1);
  // public isFormDirty = this.isFormDirtySubject.asObservable();

  constructor() { }

  setForm(form: any) {
    // Set current user data into observable
    this.currentFormSubject.next(Object.assign({}, form));
  }

  // setFormDirty() {
  //   this.isFormDirtySubject.next(true);
  // }
}
