import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user';
import { UserService } from './User.Service';
import { AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
import { Router } from '@angular/router';
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
  private router: Router,
  private userservice:UserService) {
  }
     ngOnInit(): void {
    this.route.params.forEach((params: Params) => {

      let email = params['email'];
	  console.log("email in on app user detail nginit:"+email);
      //this.userservice.getUser(email)
	//	  .then(user => this.user = user);
		  //alert(this.user);
      this.userservice.getUser(email).then(dbUser=>{
          console.log("user detail user:"+JSON.stringify(dbUser));
          this.user = dbUser;
      });
      //this.user = new User();
      //this.user.email = email;
    });
	this.isLoggedIn = true;
	this.editEnabled = false;
  }

  goBack(): void {
    console.log("Logging out..");
    this.af.auth.logout();
    console.log(" Done Logging out..");
    let link = ['/login'];
    this.router.navigate(link);

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
     console.log("after Update:" + JSON.stringify(this.user));
     this.editEnabled = false;
  }
}
