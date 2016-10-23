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
 isLoggedIn: boolean;
 editEnabled: boolean;
  constructor(
    private route: ActivatedRoute,
	private af: AngularFire,
  private userservice:UserService) {
  }
     ngOnInit(): void {
    this.route.params.forEach((params: Params) => {

      let email = params['email'];
	  alert(email);
      //this.userservice.getUser(email)
	//	  .then(user => this.user = user);
		  //alert(this.user);
      this.userservice.getUser(email).then(dbUser=>{
          this.user = dbUser;
      });
      //this.user = new User();
      //this.user.email = email;
    });
	this.isLoggedIn = true;
	this.editEnabled = false;
  }
  goBack(): void {
  this.af.auth.logout();
    window.history.back();
  }

  flipEdit():void {
      this.editEnabled = !this.editEnabled;
  }

  save():void {
     //this.userservice.getUser(this.user.email).then(dbUser=>{
    //   if(dbUser == null)
    //   {
    //     alert("this.user:" + JSON.stringify(this.user));
    //     alert("this.dbuser:" + JSON.stringify(dbUser));
    //     alert("USer from db is null");
    //     this.userservice.insertUser(this.user);
    //   }else
    //   {
    //     alert("USer update try!!!");
    //     alert("this.dbuser:" + JSON.stringify(dbUser));
    //     //this.userservice.updateUser(dbUser);
    //   }
     //});
     console.log("save:" + JSON.stringify(this.user));
     this.userservice.updateUser(this.user);
     this.editEnabled = false;
  }
}
