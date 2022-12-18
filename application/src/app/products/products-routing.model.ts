import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products-comp/products.component';
import { ProdDescriptionComponent } from './prod-description/prod-description.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    // children: [
    //   path:':id',
    //   pathMatch: 'full',
    //   component: ProdDescriptionComponent,
    // ],
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
