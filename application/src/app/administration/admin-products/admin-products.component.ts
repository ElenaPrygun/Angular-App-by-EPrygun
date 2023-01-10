import { Component } from '@angular/core';
import { ProductData } from 'src/app/products/shared/productData.interface';
import { ProductsService } from 'src/app/products/shared/products.service';
import { Subscription, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
    public productsService: ProductsService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.productsService.generatedData$.subscribe(
      (d) => {
        this.generatedData = d;
        this.filteredProducts = d;
        this.SpinnerService.hide();
      }
    );
    this.searchSubject$
      .pipe(debounceTime(2000), distinctUntilChanged())
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
        product.title.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        product.price.toString().includes(this.searchValue) ||
        product.title.toLowerCase().includes(this.searchValue.toLowerCase())
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
}
