import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
@Component({
  selector: 'my-login-detail',
  templateUrl: `./app/login-detail.component.html`
})
export class LoginDetailComponent {
  @Input()
  user: User;

  constructor(
  private router: Router) {
    this.user = new User();
    this.user.state = "Karnataka";
    this.user.country = "India";
  }
  login()
  {
    alert(JSON.stringify(this.user));
    let link = ['/user', this.user.email];
    alert(link);
    this.router.navigate(link);
  }
}
