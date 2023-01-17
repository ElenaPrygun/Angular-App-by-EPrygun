import { Component } from '@angular/core';
import { Subscription, Subject, take } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UsersHTTPService } from 'src/app/shared/services/users-http.service';
import  HttpUser  from '../../shared/interfaces/httpUser.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  usersTitles = [
    {
      id: 'ID',
      name: 'Name',
      changeProperty: 'Created',
    },
  ];

  public items: any[] = [];
  private dataSubscription: Subscription = new Subscription();
  public generatedData: HttpUser[] = [];

  constructor(
    public userService: UsersHTTPService,
    private SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.dataSubscription = this.userService.getAll().subscribe((d) => {
      this.generatedData = d;
      // this.filteredProducts = d;
      this.SpinnerService.hide();
    });   
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
