import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class StateService {

  private stateSubject = new BehaviorSubject<string>('');
  public state = this.stateSubject.asObservable().pipe(distinctUntilChanged());
  public documentType: string;

  constructor() { }

  setState(stateType: string) {
    this.stateSubject.next(stateType);
  }

  getCurrentState() {
    return this.state;
  }

  stateSubscribe(): Observable<any> {
    return this.state;
  }

  setDocumentType(documentType: string): void {
    this.documentType = documentType;
  }

  getDocumentType(): string {
    return this.documentType;
  }
}
