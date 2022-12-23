import { Injectable } from '@angular/core';
import { ProductData } from './productData.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  generatedData: ProductData[] = [];
  private cardsToShow: number = 8;

  constructor() {
    this.generatedData = this.generateData(this.cardsToShow);
  }

  generateData(n: number): ProductData[] {
    let newArr: ProductData[] = [];
    for (let i = 1; i <= n; i++) {
      newArr.push({
        id: i,
        title: `Product # ${i}`,
        price: Math.floor(Math.random() * 1000 + 300),
      });
    }
    return newArr;
  }
}
