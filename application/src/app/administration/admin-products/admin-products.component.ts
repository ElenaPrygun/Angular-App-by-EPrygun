import { Component } from '@angular/core';
import { ProductData } from 'src/app/products/shared/productData.interface';
import { ProductsService } from 'src/app/products/shared/products.service';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  public generatedData: ProductData[] = [];
  public productTitles: any;

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.generatedData = this.productsService.generatedData;
    this.productTitles = [{
      id: 'ID',
      name: 'Name',
      changeProperty: 'Price',
    }];
    
  }
}
