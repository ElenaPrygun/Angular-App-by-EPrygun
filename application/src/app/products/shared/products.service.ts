import { Injectable } from '@angular/core';
import { ProductData } from './productData.interface';
import { Observable, of, delay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public generatedData$: Observable<ProductData[]> = new Subject<
    ProductData[]
  >();
  private cardsToShow: number = 8;

  constructor() {
    this.generatedData$ = this.generateDataAsync();
  }

  generateDataAsync(): Observable<ProductData[]> {
    return of(this.generateData(this.cardsToShow)).pipe(delay(1000));
  }

  generateData(n: number): ProductData[] {
    let newArr: ProductData[] = [];
    for (let i = 1; i <= n; i++) {
      newArr.push({
        id: i,
        title: `Product # ${i}`,
        price: Math.floor(Math.random() * 1000 + 300),
        amount: 1,
      });
    }
    return newArr;
  }
}
