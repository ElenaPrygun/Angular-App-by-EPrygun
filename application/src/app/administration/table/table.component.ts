import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../shared/product-modal/product-modal.component';
import { WarningModalComponent } from '../shared/warning-modal/warning-modal.component';
import { ProductData } from 'src/app/shop/shared/productData.interface';
import { UserModalComponent } from '../shared/user-modal/user-modal.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  public items!: {
    id: string;
    name?: string;
    price?: number;
    updatedAt?: string;
    username?: string;
  }[];
  @Input()
  public titles: any;
  @Input()
  public displayProduct: boolean = true;

  @Output()
  public onSort: EventEmitter<string> = new EventEmitter<string>();

  public p: number = 1;
  public sortProperty!: string;
  public sortDirection: 'asc' | 'desc' = 'asc';

  constructor(public dialog: MatDialog) {
    this.sortProperty = '';
    this.sortDirection = 'asc';
  }

  sortData(property: string) {
    this.sortProperty = property;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.items = [...this.items].sort((a: any, b: any) => {
      const propA = Reflect.get(a, property);
      const propB = Reflect.get(b, property);
      if (this.sortDirection === 'asc') {
        return propA > propB ? 1 : -1;
      } else {
        return propA < propB ? 1 : -1;
      }
    });
  }

  openEditDialog(item: any) {
    if (this.displayProduct) {
      this.dialog.open(ProductModalComponent, {
        data: {
          data: {
            name: item.name,
            price: item.price,
            description: item.description,
          },
          id: item.id,
        },
      });
    } else {
      this.dialog.open(UserModalComponent, {
        data: {
          data: {
            username: item.username,
            updatedAt: item.updatedAt,
          },
          id: item.id,
        },
      });
    }
  }
  openDeleteDialog(item: {
    id: string;
    name?: string;
    price?: number;
    updatedAt?: string;
    username?: string;
  }) {
    this.dialog.open(WarningModalComponent, {
      data: { data: { id: item.id } },
    });
  }

  openAddDialog() {
    if (this.displayProduct) {
      this.dialog.open(ProductModalComponent, {
        data: {
          data: { name: '', price: '', description: '' },
        },
      });
    } else {
      this.dialog.open(UserModalComponent, {
        data: {
          data: { username: '', password: '' },
        },
      });
    }
  }
}
