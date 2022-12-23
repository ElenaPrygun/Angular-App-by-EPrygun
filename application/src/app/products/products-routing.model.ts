import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products-comp/products.component';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProdDescriptionComponent } from './prod-description/prod-description.component';
import { CartComponent } from './cart/cart.component';
import {NotFoundComponent} from '../shared/not-found/not-found.component';
=======


const routes: Routes = [
  {
    path: '',

    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: ':id',
        component: ProdDescriptionComponent,
      },

      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
