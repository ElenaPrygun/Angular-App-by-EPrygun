import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  private dataSubscription: Subscription = new Subscription();
  public generatedData: ProductData[] = [];

  constructor(
    public productsService: ProductsService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.productsService.generatedData$.subscribe(
      (d) => {
        this.generatedData = d;
        this.SpinnerService.hide();
      }
    );
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
