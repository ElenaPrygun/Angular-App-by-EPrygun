import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../shared/product-modal/product-modal.component';
import { WarningModalComponent } from '../shared/warning-modal/warning-modal.component';
import { ProductData } from 'src/app/shop/shared/productData.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input()
  public items: any;
  @Input()
  public titles: any;

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
  }
  openDeleteDialog(item: ProductData) {
    this.dialog.open(WarningModalComponent, {
      data: { data: { id: item.id } },
    });
  }
  openAddDialog() {
    this.dialog.open(ProductModalComponent, {
      data: {
        data: { name: '', price: '', description: '' },
      },
    });
  }
}
