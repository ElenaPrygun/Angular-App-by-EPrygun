import { Component } from '@angular/core';
import { ProductData } from 'src/app/shop/shared/productData.interface';
import { HttpProduct } from '../../shared/interfaces/httpProduct.interface';
import { ProductsService } from 'src/app/shop/shared/products.service';
import { Subscription, Subject, take } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../shared/product-modal/product-modal.component';
import { WarningModalComponent } from '../shared/warning-modal/warning-modal.component';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent {
  searchValue = '';
  filteredProducts: ProductData[] = [];
  private dataSubscription: Subscription = new Subscription();
  public generatedData: ProductData[] = [];
  public productTitles = [
    {
      id: 'ID',
      name: 'Name',
      changeProperty: 'Price',
    },
  ];
  searchSubject$ = new Subject<string>();
  sortProperty = '';
  sortDirection = 'asc';
  public items: any[] = [];

  selectedOption = 'less';
  inputValue = '';

  constructor(
    public productsService: ProductHTTPService,
    private SpinnerService: NgxSpinnerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.productsService.getAll().subscribe((d) => {
      this.generatedData = d;
      this.filteredProducts = d;
      this.SpinnerService.hide();
    });
    this.searchSubject$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        this.searchValue = value;
        this.searchData();
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  searchData() {
    this.filteredProducts = this.generatedData.filter((product) => {
      return (
        product.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        product.price.toString().includes(this.searchValue) ||
        product.name.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    });
  }

  sortData(property: string, items: any[]) {
    this.sortProperty = property;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.items = items.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
  }

  filterPrice() {
    this.filteredProducts = this.generatedData;
    const price = parseInt(this.inputValue, 10);
    if (isNaN(price)) {
    } else {
      if (this.selectedOption === 'less') {
        this.filteredProducts = this.generatedData.filter(
          (product) => product.price < price
        );
      } else if (this.selectedOption === 'more') {
        this.filteredProducts = this.generatedData.filter(
          (product) => product.price > price
        );
      }
    }
  }

  public openEditDialog(item: ProductData): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: { isEdit: true, item },
    });

    dialogRef.afterClosed().subscribe((result: ProductData) => {
      if (result) {
        this.productsService.update(result);
        this.productsService
          .getAll()
          .pipe(take(1))
          .subscribe((products) => {
            this.generatedData = products;
            this.filteredProducts = [...products];
          });
      }
    });
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: { isEdit: false },
    });

    dialogRef.afterClosed().subscribe((result: ProductData) => {
      if (result) {
        let newProduct: ProductData = {
          name: result.name,
          price: result.price,
        };

        this.productsService.create(newProduct).subscribe(() => {
          this.productsService
            .getAll()
            .pipe(take(1))
            .subscribe((data: HttpProduct[]) => {
              this.generatedData = data.map((item: HttpProduct) =>
                this.toProduct(item)
              );
              this.filteredProducts = [...this.generatedData];
            });
        });
      }
    });
  }

  private toProduct(data: HttpProduct): ProductData {
    return {
      id: data.id,
      name: data.name,
      price: data.price,
    };
  }

  public openDeleteDialog(item: ProductData): void {
    const dialogRef = this.dialog.open(WarningModalComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'ok') {
        this.productsService.delete(String(item.id)).subscribe(() => {
          this.productsService
            .getAll()
            .pipe(take(1))
            .subscribe((data: HttpProduct[]) => {
              this.generatedData = data.map((item: HttpProduct) =>
                this.toProduct(item)
              );
              this.filteredProducts = [...this.generatedData];
            });
        });
      }
    });
  }
}
