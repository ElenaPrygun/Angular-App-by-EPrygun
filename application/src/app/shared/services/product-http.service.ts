import { Injectable } from '@angular/core';
import { ProductData } from 'src/app/shop/shared/productData.interface';
// import { HttpProduct } from '../interfaces/httpProduct.interface';
import { HttpProduct } from '../interfaces/httpProduct.interface';
import { Observable, of, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductHTTPService {
  private baseUrl: string = 'https://hys-fe-course-api.vercel.app/products';
  private accessToken: string =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5Njg3N2NiNy0zZmVlLTRhN2UtODAwMC1mZWQ1YjkzZDAxNWIiLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkbEV2VEVEMFVHdk9GQWpJVmpLQnBBZWtqTVFrY0tFcXlNSUhKVEVyNVo1LmJjblRoaHlwQW0iLCJjcmVhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTAxLTA3VDIxOjE5OjQ0LjU3M1oiLCJpYXQiOjE2NzMyNzUzNzAsImV4cCI6MTY3MzM2MTc3MH0.cJvcoJf9iF3flJ6nXdgK8ZTMR1zNMtxEDRVN4jKlln8';

  private cardsToShow: number = 8;

  constructor(private http: HttpClient) {}

  getAll(): Observable<HttpProduct[]> {
    return this.http.get(this.baseUrl) as Observable<HttpProduct[]>;
  }

  getById(productId: string): Observable<HttpProduct> {
    return this.http.get(
      this.baseUrl + '/' + productId
    ) as Observable<HttpProduct>;
  }

  create(product: ProductData): Observable<HttpProduct> {
    return this.http.post(
      this.baseUrl,
      {
        name: product.name,
        price: Number(product.price),
      },
      {
        headers: {
          Authorization: this.accessToken,
        },
      }
    ) as Observable<HttpProduct>;
  }

  delete(productId: string): Observable<HttpProduct> {
    return this.http.delete(this.baseUrl + '/' + productId, {
      headers: {
        Authorization: this.accessToken,
      },
    }) as Observable<HttpProduct>;
  }

  update(product: ProductData): Observable<HttpProduct> {
    return this.http.put(
      this.baseUrl + '/' + product.id,
      {
        name: product.name,
        price: Number(product.price),
      },
      {
        headers: {
          Authorization: this.accessToken,
        },
      }
    ) as Observable<HttpProduct>;
  }
}
