import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { UserService } from './User.Service';
@Component({
  selector: 'my-register-detail',
  templateUrl: `./app/register-detail.component.html`
})
export class RegisterDetailComponent {
  @Input()
  user: User;

  constructor(
  private router: Router,
  private userservice:UserService) {
    this.user = new User();
    this.user.state = "Karnataka";
    this.user.country = "India";
  }

  register()
  {
    console.log("register user:"+JSON.stringify(this.user));
    let link = ['/user', this.user.email];
    if(this.userservice.addUser(this.user))
	{
		console.log("addUser returned true");
		console.log("navigating to "+link);
		this.router.navigate(link);
	}else{
		console.log(" add user returned false");
	}

  }
}
