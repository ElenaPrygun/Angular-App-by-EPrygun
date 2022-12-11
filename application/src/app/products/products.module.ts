import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CardComponent } from './card/card.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';

@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    ProductsListComponent,
    CardComponent,
    BottomNavComponent,
  ],
  imports: [CommonModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
