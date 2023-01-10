import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { ProductData } from '../shared/productData.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: ProductData[] = this.cartService.getProdItems();
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItem(id: string| undefined) {
    if(id) {
      this.cartService.removeItem(id);
      this.totalPrice = this.cartService.getTotalPrice();
  }
  }

  minus(item: ProductData) {
    if(item && item.amount) {
      item.amount -= 1;
      if(item.amount <= 0) {
        this.removeItem(item.id);
      }
    }
    this.totalPrice = this.cartService.getTotalPrice();
  }
  
  plus(item: ProductData) {
    if(item && item.amount) {
      item.amount += 1;
    }
    this.totalPrice = this.cartService.getTotalPrice();
  }

}


