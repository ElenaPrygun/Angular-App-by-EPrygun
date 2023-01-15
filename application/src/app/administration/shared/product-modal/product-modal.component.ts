import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  public item: any;
  public title!: string;

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductHTTPService
  ) {}

  ngOnInit(): void {
    if (this.data.isEdit) {
      this.title = 'Edit Product';
      this.item = Object.assign({}, this.data.item);
    } else {
      this.title = 'Create Product';
      this.item = {};
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  showData(){
    if(this.title=="Create Product"){
      this.productService.create(this.item)
      .subscribe({
        next: (response) => {
          window.location.reload();
        },});
    }else{
      this.productService
      .update(this.data.id)
      .subscribe({
        next: (response) => {
          window.location.reload();
        },})
    }
    this.dialogRef.close();
  }
}
