import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration-routing.model';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { UsersComponent } from './users/users.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AdministrationComponent,
    NavComponent,
    TableComponent,
    AdminProductsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
  ],
})
export class AdministrationModule {}
