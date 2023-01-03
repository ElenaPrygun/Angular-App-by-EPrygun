import { Component } from '@angular/core';
import { ProductData } from 'src/app/products/shared/productData.interface';
import { ProductsService } from 'src/app/products/shared/products.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  private dataSubscription: Subscription = new Subscription();
  public generatedData: ProductData[] = [];
  public productTitles: any;

  constructor(public productsService: ProductsService, private SpinnerService: NgxSpinnerService) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.productsService.generatedData$.subscribe(
      (d) => {
        this.generatedData = d;
        this.SpinnerService.hide();
      }
    );
    this.productTitles = [
      {
        id: 'ID',
        name: 'Name',
        changeProperty: 'Price',
      },
    ];
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
