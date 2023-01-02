import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products-comp/products.component';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.component.html',
  styleUrls: ['./prod-description.component.scss'],
})
export class ProdDescriptionComponent implements OnInit {
  
  @Input()
  product: any ;
  
  productId: number = 0;
  generatedData: ProductData[] = [];
  buttonText: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.generatedData = this.productsService.generatedData;
    this.product = this.generatedData.find((el) => el.id == this.productId);
    this.buttonText = 'Add to cart';
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.buttonText = 'In cart';
  }
}
