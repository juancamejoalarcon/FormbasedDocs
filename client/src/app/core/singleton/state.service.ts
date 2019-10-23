import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class StateService {

  private stateSubject = new BehaviorSubject<string>('');
  public state = this.stateSubject.asObservable().pipe(distinctUntilChanged());

  constructor() { }

  setState(stateType: string) {
    this.stateSubject.next(stateType);
  }

  stateSubscribe(): Observable<any> {
    return this.state;
  }
}
