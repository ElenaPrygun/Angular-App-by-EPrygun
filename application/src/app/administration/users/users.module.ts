import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, NgModule, NgxSpinnerModule, FormsModule],
})
export class UsersModule {}
