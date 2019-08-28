import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Comment, Form } from '../models';
import { map } from 'rxjs/operators';


@Injectable()
export class CommentsService {
  constructor (
    private apiService: ApiService
  ) {}

  add(slug, payload): Observable<Comment> {
    return this.apiService
    .post(
      `/form/${slug}/comments`,
      { comment: { body: payload } }
    ).pipe(map(data => data.comment));
  }

  getAll(slug, order): Observable<Comment[]> {
    const params: HttpParams = new HttpParams().set('orderBy', order);
    return this.apiService.get(`/form/${slug}/comments`, params)
      .pipe(map(data => data.comments));
  }

  destroy(commentId, formSlug) {
    return this.apiService
           .delete(`/form/${formSlug}/comments/${commentId}`);
  }

  like(slug: string, id: any): Observable<Comment> {
    return this.apiService.post(`/form/${slug}/comments/${id}/like`)
      .pipe(map(data => data.comment));
  }

  dislike(slug: string, id: any): Observable<Comment> {
    return this.apiService.delete(`/form/${slug}/comments/${id}/like`)
    .pipe(map(data => data.comment));
  }

  responseToComment(slug: string, payload: any, commentId: any): Observable<Comment> {
    return this.apiService
    .post(
      `/form/${slug}/comments/${commentId}/response`,
      { comment: { body: payload } }
    ).pipe(map(data => data.comment));
  }

  updateComment(slug: string, payload: any, commentId: any): Observable<Comment> {
    return this.apiService
    .put(
      `/form/${slug}/comments/${commentId}`,
      { comment: { body: payload } }
    ).pipe(map(data => data.comment));
  }

}
