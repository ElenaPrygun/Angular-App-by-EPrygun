import { Injectable } from '@angular/core';
import { ProductData } from 'src/app/shop/shared/productData.interface';
import { HttpProduct } from '../interfaces/httpProduct.interface';
import { Observable, of, Subject, catchError, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductHTTPService {
  private baseUrl: string = 'https://hys-fe-course-api.vercel.app/products';

  constructor(private http: HttpClient) {}

  private errorHandler(error:  HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'Something went wrong');
  }

  getAll(): Observable<HttpProduct[]> {
    return this.http
      .get<HttpProduct[]>(this.baseUrl)
      .pipe(catchError(this.errorHandler));
  }

  getById(id: string): Observable<HttpProduct> {
    return this.http
      .get<HttpProduct>(this.baseUrl + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  create(data: ProductData): Observable<HttpProduct> {
    return this.http
      .post<HttpProduct>(this.baseUrl, data)
      .pipe(catchError(this.errorHandler));
  }

  delete(id: string): Observable<HttpProduct> {
    return this.http
      .delete<HttpProduct>(this.baseUrl + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id:string, data: ProductData): Observable<HttpProduct> {
    return this.http
      .put<HttpProduct>(this.baseUrl + '/' + id, data)
      .pipe(catchError(this.errorHandler));
  }
}
