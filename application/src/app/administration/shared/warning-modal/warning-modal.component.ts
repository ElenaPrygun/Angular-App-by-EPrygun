import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';
import { UsersHTTPService } from 'src/app/shared/services/users-http.service';
import { HttpProduct } from 'src/app/shared/interfaces/httpProduct.interface';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss'],
})
export class WarningModalComponent {
  public title!: string;

  constructor(
    public dialogRef: MatDialogRef<WarningModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductHTTPService,
    private userService: UsersHTTPService
  ) {}

  ngOnInit(): void {
    this.title = this.data.name;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onOK(): void {
    if (this.data.type=== "HttpProduct") {
      this.productService.delete(this.data.data.id).subscribe({
        next: (response) => {
          window.location.reload();
        },
      });
    } else {
      this.userService.delete(this.data.data.id).subscribe({
        next: (response) => {
          window.location.reload();
        },
      });
    }

    this.dialogRef.close();
  }
}
