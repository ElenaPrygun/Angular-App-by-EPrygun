import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends ProductsComponent {}
