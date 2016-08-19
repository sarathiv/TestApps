import { Component, Input } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'my-login-detail',
  templateUrl: `./app/login-detail.component.html`
})
export class LoginDetailComponent {
  @Input()
  user: User;
  constructor() {
    this.user = new User();
    this.user.state = "Karnataka";
    this.user.country = "India";
  }
  login()
  {
    alert(JSON.stringify(this.user));
  }
}
