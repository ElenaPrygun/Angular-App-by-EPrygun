import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products-comp/products.component';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';

@Component({
  selector: 'app-prod-description',
  templateUrl: './prod-description.component.html',
  styleUrls: ['./prod-description.component.scss'],
})
export class ProdDescriptionComponent implements OnInit {
  product: ProductData | undefined;
  // product:ProductData={
  //   id: 0,
  //   title: "",
  //   price:0,
  // };

  productId: number = 0;
  generatedData: ProductData[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.generatedData = this.productsService.generatedData;
    this.product = this.generatedData.find((el) => el.id == this.productId);
  }
}
