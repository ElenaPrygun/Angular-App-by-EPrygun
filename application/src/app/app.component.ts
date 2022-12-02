import { Component } from '@angular/core';

interface ProductData {
  id?: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cardsToShow: number = 8;
  generatedData: ProductData[] = this.generateData(this.cardsToShow);

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
}
