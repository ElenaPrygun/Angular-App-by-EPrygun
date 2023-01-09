import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CartComponent } from './shop/cart/cart.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shop/products.module').then((mod) => mod.ProductsModule),
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent,
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (mod) => mod.AdministrationModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
