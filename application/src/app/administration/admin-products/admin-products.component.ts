import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ProductData } from 'src/app/products/shared/productData.interface';
import { ProductsService } from 'src/app/products/shared/products.service';
import { Subscription, fromEvent, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  filteredProducts: ProductData[] = [];
  private dataSubscription: Subscription = new Subscription();
  public generatedData: ProductData[] = [];
  public productTitles = [
    {
      id: 'ID',
      name: 'Name',
      changeProperty: 'Price',
    },
  ];

  constructor(
    public productsService: ProductsService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.productsService.generatedData$.subscribe(
      (d) => {
        this.generatedData = d;
        console.log(this.generatedData);
        this.SpinnerService.hide();
      }
    );
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
