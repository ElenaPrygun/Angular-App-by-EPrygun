import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminProductsComponent],
  imports: [CommonModule, NgxSpinnerModule, NgModule, FormsModule],
})
export class AdminProductsModule {}
