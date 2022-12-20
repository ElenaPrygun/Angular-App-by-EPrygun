import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products-comp/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProdDescriptionComponent } from './prod-description/prod-description.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsComponent,
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: ProdDescriptionComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
