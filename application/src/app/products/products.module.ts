import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products-comp/products.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CardComponent } from './card/card.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { CurrencyPipe } from './shared/currency.pipe';
import { SelectColorDirective } from './shared/select-color.directive';
import { ProdDescriptionComponent } from './prod-description/prod-description.component';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ProductsRoutingModule } from './products-routing.model';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    ProductsListComponent,
    CardComponent,
    BottomNavComponent,
    CurrencyPipe,
    SelectColorDirective,
    ProdDescriptionComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    NgxSpinnerModule,    
  ],

  // exports: [ProductsComponent],
})
export class ProductsModule {}
