import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { AdministrationModule } from '../administration.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule, AdministrationModule
  ],
  exports: [UsersComponent],
})
export class UsersModule { }
