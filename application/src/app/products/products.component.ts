import { Component } from '@angular/core';

interface ProductData {
  id?: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  cardsToShow: number = 8;
  generatedData: ProductData[] = [];

  generateData(n: number): ProductData[] {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
      newArr.push({
        id: i,
        title: `Product # ${i}`,
        price: Math.floor(Math.random() * 100),
      });
    }
    return newArr;
  }

  ngOnInit(): void {
    this.generatedData = this.generateData(this.cardsToShow);
  }
}
