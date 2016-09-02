import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user';
import { UserService } from './User.Service';
import { AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
@Component({
  selector: 'my-user-detail',
  templateUrl: 'app/user-detail.component.html'
})

export class UserDetailComponent implements OnInit{
@Input()
 user: User;
  constructor(
    private route: ActivatedRoute,
	private af: AngularFire) {
  }
     ngOnInit(): void {
    this.route.params.forEach((params: Params) => {

      let email = params['email'];
	  alert(email);
      //this.userservice.getUser(email)
	//	  .then(user => this.user = user);
		  //alert(this.user);
      this.user = new User();
      this.user.email = email;
    });
  }
  goBack(): void {
  this.af.auth.logout();
    window.history.back();
  }
}
