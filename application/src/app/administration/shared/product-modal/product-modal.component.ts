import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  public keys: string[] = Object.keys(this.data.data);
  public titleText!: string;

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private productsService: ProductHTTPService
  ) {}
  form: FormGroup = this.fb.group({
    ...this.data.data,
  });

  closeDialog() {
    this.dialogRef.close();
  }
  ngOnInit() {
    if (this.data.id) {
      this.titleText = 'Edit Product';
    } else {
      this.titleText = 'Add Product';
    }
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
