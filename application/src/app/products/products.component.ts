import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/products.service';
import { ProductData } from './shared/productData.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  
  public generatedData: ProductData[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.generatedData = this.productsService.generatedData;
  }
}
