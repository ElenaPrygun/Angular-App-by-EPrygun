import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { ProductData } from '../shared/productData.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  product: ProductData = {
    id: 0,
    title: '',
    price: 0,
    amount: 0
  };
  buttonText:string ="";

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.buttonText="Add to cart";
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.buttonText="In cart"
  }
}
