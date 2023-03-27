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
    let exists = this.prodItems.find(x => x.id === item.id);
    if(exists && exists.amount) {
        exists.amount +=1;
    } else {
        item.amount = 1;
        this.prodItems.push(item);
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.prodItems) {
      if(item && item.amount) {
        totalPrice += item.price * item.amount; 
      }
    }
    return totalPrice;
  }

  removeItem(id: string) {
    let index = this.prodItems.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.prodItems.splice(index, 1);
    }
  }
}
