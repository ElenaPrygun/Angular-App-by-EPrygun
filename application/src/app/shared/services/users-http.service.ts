import { Injectable } from '@angular/core';
import HttpUser  from '../interfaces/httpUser.interface';
import User from '../interfaces/user.interface';
import { Observable, of, Subject, catchError, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersHTTPService {
  private baseUrl: string = 'https://hys-fe-course-api.vercel.app/users';

  constructor(private http: HttpClient) {}

  private errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'Something went wrong');
  }

  getAll(): Observable<HttpUser[]> {
    return this.http
      .get<HttpUser[]>(this.baseUrl)
      .pipe(catchError(this.errorHandler));
  }

  getById(id: string): Observable<HttpUser> {
    return this.http
      .get<HttpUser>(this.baseUrl + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  create(data: User): Observable<HttpUser> {
    return this.http
      .post<HttpUser>(this.baseUrl, data)
      .pipe(catchError(this.errorHandler));
  }

  delete(id: string): Observable<HttpUser> {
    return this.http
      .delete<HttpUser>(this.baseUrl + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: string, data: User): Observable<HttpUser> {
    return this.http
      .put<HttpUser>(this.baseUrl + '/' + id, data)
      .pipe(catchError(this.errorHandler));
  }
}
