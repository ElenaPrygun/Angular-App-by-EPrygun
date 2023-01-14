import { Injectable } from '@angular/core';
import { ProductData } from 'src/app/shop/shared/productData.interface';
import { HttpProduct } from '../interfaces/httpProduct.interface';
import { Observable, of, Subject, catchError, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductHTTPService {
  private baseUrl: string = 'https://hys-fe-course-api.vercel.app/products';

  constructor(private http: HttpClient) {}

  private errorHandler(error: Response) {
    return throwError(() => new Error('Something wrong...'));
  }

  getAll(): Observable<HttpProduct[]> {
    return this.http
      .get<HttpProduct[]>(this.baseUrl)
      .pipe(catchError(this.errorHandler));
  }

  getById(productId: string): Observable<HttpProduct> {
    return this.http
      .get<HttpProduct>(this.baseUrl + '/' + productId)
      .pipe(catchError(this.errorHandler));
  }

  create(product: ProductData): Observable<HttpProduct> {
    return this.http
      .post<HttpProduct>(this.baseUrl, {
        name: product.name,
        price: Number(product.price),
      })
      .pipe(catchError(this.errorHandler));
  }

  delete(productId: string): Observable<HttpProduct> {
    return this.http
      .delete<HttpProduct>(this.baseUrl + '/' + productId)
      .pipe(catchError(this.errorHandler));
  }

  update(product: ProductData): Observable<HttpProduct> {
    return this.http
      .put<HttpProduct>(this.baseUrl + '/' + product.id, {
        name: product.name,
        price: Number(product.price),
      })
      .pipe(catchError(this.errorHandler));
  }
}
