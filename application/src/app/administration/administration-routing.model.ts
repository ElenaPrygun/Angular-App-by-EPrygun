import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { UsersComponent } from './users/users.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    children: [
      {
        path: '',
        redirectTo: '/administration/products',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'products',
        component: AdminProductsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
