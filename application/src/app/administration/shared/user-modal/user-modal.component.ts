import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHTTPService } from 'src/app/shared/services/product-http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductData } from 'src/app/shop/shared/productData.interface';
import { HttpProduct } from '../../../shared/interfaces/httpProduct.interface';
import { UsersHTTPService } from 'src/app/shared/services/users-http.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent {
  public keys: [string, any][] = Object.entries(this.data.data);
  public titleText!: string;

  form: FormGroup = this.fb.group({
    ...this.data.data,
  });

  constructor(
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UsersHTTPService
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.titleText = this.data.id ? 'Edit User' : 'Add User';
  }

  showData() {
    let { username, password } = this.form.getRawValue();

    if (this.titleText == 'Add User') {
      this.userService
        .create({
          username: username,
          password: String(password),
        })
        .subscribe({
          next: (response) => {
            console.log(response);
            window.location.reload();
          },
        });
    } else {
      this.userService
        .update(this.data.id, {
          username: username,
          password: String(password),
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
