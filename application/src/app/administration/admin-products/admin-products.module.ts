import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AdminProductsComponent],
  imports: [CommonModule, NgxSpinnerModule],
})
export class AdminProductsModule {}
