import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = '';

  // tslint:disable-next-line:typedef
  isUserNameEmpty() {
    return (this.userName !== '' ? false : true);
  }

  // tslint:disable-next-line:typedef
  resetUsername() {
    this.userName = '';
  }
}
