import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
@Component({
  selector: 'my-register-detail',
  templateUrl: `./app/register-detail.component.html`
})
export class RegisterDetailComponent {
  @Input()
  user: User;

  constructor(
  private router: Router) {
    this.user = new User();
    this.user.state = "Karnataka";
    this.user.country = "India";
  }

  register()
  {
    alert(JSON.stringify(this.user));
    let link = ['/user', this.user.email];
    alert(link);
    this.router.navigate(link);
  }
}
