import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';
import { CartService } from '../shared/cart.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';


@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.component.html',
  styleUrls: ['./prod-description.component.scss'],
})
export class ProdDescriptionComponent implements OnInit, OnDestroy {
  @Input()
  product: any;

  private dataSubscription: Subscription = new Subscription();  
  generatedData: ProductData[] = [];
  buttonText: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductHTTPService,
    public cartService: CartService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    const productId = String(this.activatedRoute.snapshot.paramMap.get('id'));

    this.dataSubscription = this.productsService.getById(productId as string).subscribe(
      (d) => {
        this.product = d;
        this.buttonText = 'Add to cart';
        this.SpinnerService.hide();
      }
    );
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.buttonText = 'In cart';
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
