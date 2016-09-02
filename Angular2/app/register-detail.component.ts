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
    alert(JSON.stringify(this.user));
    let link = ['/user', this.user.email];
    if(this.userservice.addUser(this.user))
	{
		alert("true");
		alert(link);
		this.router.navigate(link);
	}else{
		alert("false");
	}
	
  }
}
