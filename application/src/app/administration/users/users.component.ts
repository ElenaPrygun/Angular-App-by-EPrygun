import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  usersTitles = [{
    id: 'ID',
    name: 'Name',
    changeProperty: 'Created',
  }];
}
