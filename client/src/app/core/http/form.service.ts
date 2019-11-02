import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Form, FormListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class FormService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: FormListConfig): Observable<{forms: Form[], formsCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config)
    .forEach((key) => {
      params[key] = config[key];
    });

    return this.apiService
    .get(
      '/form' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(slug: string): Observable<Form> {
    return this.apiService.get('/form/' + slug)
      .pipe(map(data => data.form));
  }

  getCertifiedForm(slug: string): Observable<Form> {
    return this.apiService.get('/form/certified-forms/' + slug)
      .pipe(map(data => data.certifiedForm));
  }

  getPaidCertifiedForm(slug: string): Observable<any> {
    return this.apiService.get('/form/paid-certified-forms/' + slug)
      .pipe(map(data => data));
  }

  getWithView(slug: string): Observable<Form> {
    const params: HttpParams = new HttpParams().set('view', 'true');
    return this.apiService.get('/form/' + slug, params)
      .pipe(map(data => data.form));
  }

  destroy(slug: string) {
    return this.apiService.delete('/form/' + slug);
  }

  save(form: Form): Observable<Form> {
    if (form.type === 'Filled') {
      // New form
      if (form.slug === form.originalSlug) {
      delete form.slug;
      return this.apiService.post('/form/fill', {form: form})
        .pipe(map(data => data.form));
      } else {
        return this.apiService.put('/form/' + form.slug, {form: form})
        .pipe(map(data => data.form));
      }
    } else if (form.type === 'Certified') {
      return this.apiService.post('/form/certified-forms/fill', {form: form})
      .pipe(map(data => data.form));
    } else {
      // If we're updating an existing form
      if (form.slug) {
        return this.apiService.put('/form/' + form.slug, {form: form})
          .pipe(map(data => data.form));

      // Otherwise, create a new form
      } else {
        return this.apiService.post('/form/create', {form: form})
          .pipe(map(data => data.form));
      }
    }
  }

  like(slug: string): Observable<Form> {
    return this.apiService.post('/form/' + slug + '/like');
  }

  disLike(slug: string): Observable<Form> {
    return this.apiService.delete('/form/' + slug + '/like');
  }


}
