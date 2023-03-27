import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { ProductData } from '../shared/productData.interface';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  @ViewChild('loadMoreButton', { static: true })
  private loadMoreButton!: ElementRef;

  private dataSubscription: Subscription = new Subscription();
  public generatedData: ProductData[] = [];
  public displayedData: ProductData[] = [];
  public itemsPerPage = 8;
  public currentPage = 0;

  constructor(
    public productsService: ProductHTTPService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.productsService.getAll().subscribe((d) => {
      this.generatedData = d;
      this.displayedData = this.generatedData.slice(
        this.currentPage * this.itemsPerPage,
        (this.currentPage + 1) * this.itemsPerPage
      );
      this.SpinnerService.hide();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  loadMore() {
    this.currentPage += 1;
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = (this.currentPage + 1) * this.itemsPerPage;
    const newData = this.generatedData.slice(startIndex, endIndex);
    if (newData.length === 0) {
      alert('No more items to load');
    } else {
      this.displayedData = this.displayedData.concat(newData);
      this.loadMoreButton.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
