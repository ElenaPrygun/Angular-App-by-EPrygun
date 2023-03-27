import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductData } from 'src/app/shop/shared/productData.interface';
import { HttpProduct } from '../../../shared/interfaces/httpProduct.interface';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  public keys: [string, any][] = Object.entries(this.data.data);
  public titleText!: string;

  form: FormGroup = this.fb.group({
    ...this.data.data,
  });

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private productsService: ProductHTTPService
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.titleText = this.data.id ? 'Edit Product' : 'Add Product';
  }

  showData() {
    let { name, price, description } = this.form.getRawValue();

    if (this.titleText == 'Add Product') {
      this.productsService
        .create({
          name: name,
          price: +price,
          description: description,
        })
        .subscribe({
          next: (response) => {
            console.log(response);
            window.location.reload();
          },
        });
    } else {
      this.productsService
        .update(this.data.id, {
          name: name,
          price: +price,
          description: description,
        })
        .subscribe({
          next: (response) => {
            window.location.reload();
          },
        });
    }
    this.dialogRef.close();
   }
}
