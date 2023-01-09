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
import { FormsModule } from '@angular/forms';
import { ProductModalComponent } from './shared/product-modal/product-modal.component';
import { UserModalComponent } from './shared/user-modal/user-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WarningModalComponent } from './shared/warning-modal/warning-modal.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    NavComponent,
    TableComponent,
    AdminProductsComponent,
    UsersComponent,
    ProductModalComponent,
    UserModalComponent,
    WarningModalComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AdministrationModule {}
