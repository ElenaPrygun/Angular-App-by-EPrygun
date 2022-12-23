
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  public generatedData: ProductData[]=[];

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.generatedData = this.productsService.generatedData;
  }


}
