import { Injectable } from '@angular/core';

import { ProductData } from './productData.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  prodItems: ProductData[] = [];  

  constructor() {}

  getProdItems() {
    return this.prodItems;
  }

  addToCart(item: ProductData) {
    this.prodItems.push(item);
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.prodItems) {
      totalPrice += item.price * item.amount;
    }
    return totalPrice;
  }

  removeItem(id: number | undefined) {
    let index = this.prodItems.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.prodItems.splice(index, 1);
    }
  } 
}
