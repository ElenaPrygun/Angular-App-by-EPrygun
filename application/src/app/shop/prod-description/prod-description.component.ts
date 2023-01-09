import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products-comp/products.component';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';
import { CartService } from '../shared/cart.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.component.html',
  styleUrls: ['./prod-description.component.scss'],
})
export class ProdDescriptionComponent implements OnInit, OnDestroy {
  @Input()
  product: any;

  private dataSubscription: Subscription = new Subscription();
  productId: number = 0;
  generatedData: ProductData[] = [];
  buttonText: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public cartService: CartService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.dataSubscription = this.productsService.generatedData$.subscribe(
      (d) => {
        this.product = d.find((el) => el.id == this.productId);
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
