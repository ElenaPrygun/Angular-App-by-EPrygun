import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';

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
    private productService: ProductHTTPService
  ) {}

  ngOnInit(): void {
    this.title = this.data.name;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onOK(): void {
    this.productService.delete(this.data.data.id).subscribe({
      next: (response) => {
        window.location.reload();
      },
    });
    this.dialogRef.close();
  }
}
