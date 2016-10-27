import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Error } from './error';
import { AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
@Component({
  selector: 'my-login-detail',
  templateUrl: `./app/login-detail.component.html`
})
export class LoginDetailComponent {
  @Input()
  user: User;
  error:Error;
  constructor(
  private router: Router,
  private af: AngularFire) {
    this.user = new User();
    this.user.state = "Karnataka";
    this.user.country = "India";
  }
  login(provider?:string)
  {
    console.log(JSON.stringify(this.user) + "provider is:" + provider);

	// Email and password
	if(provider == "email")
	{
	    console.log("In provider:" + provider);
		this.af.auth.login({ email: this.user.email, password: this.user.password },
							{provider: AuthProviders.Password,
						   method: AuthMethods.Password}
						   )
					.then(
						fireauthstate=>{
										let link = ['/user', this.user.email];
										console.log(JSON.stringify(fireauthstate));
										alert(link);
										this.router.navigate(link);
										},
						fireauthstate=>{
							console.log("test " +JSON.stringify(fireauthstate));
							this.error = new Error();
							this.error.message = fireauthstate.message;
						})
					.catch(fireauthstate=>{
											console.log(JSON.stringify(fireauthstate));
											this.error = new Error();
										    this.error.message = fireauthstate.message;
											});
	}else if(provider == "google")
	{
		console.log("In provider "+provider);
		this.af.auth.login(
							{provider: AuthProviders.Google,
						   method: AuthMethods.Popup}
						   )
					.then(
						fireauthstate=>{
						                this.user.email=fireauthstate.auth.email;
										let link = ['/user', this.user.email];
										console.log(JSON.stringify(fireauthstate))
										console.log("Will navigate to"+link);
										this.router.navigate(link);
										},
						fireauthstate=>{
							console.log("test " +JSON.stringify(fireauthstate));
							this.error = new Error();
							this.error.message = fireauthstate.message;
						})
					.catch(fireauthstate=>{
						    console.log(JSON.stringify(fireauthstate));
							this.error = new Error();
							this.error.message = JSON.stringify(fireauthstate);
					});
	}
	else if(provider == "github")
	{
		console.log("In provider:"+provider);
		this.af.auth.login(
							{provider: AuthProviders.Github,
						   method: AuthMethods.Popup}
						   )
					.then(
						fireauthstate=>{
						                this.user.email=fireauthstate.auth.email;
										let link = ['/user', this.user.email];
										console.log(JSON.stringify(fireauthstate))
										console.log("In provider:"+link);
										this.router.navigate(link);
										},
						fireauthstate=>{
							console.log("test " +JSON.stringify(fireauthstate));
							this.error = new Error();
							this.error.message = fireauthstate.message;
						})
					.catch(fireauthstate=>console.log("Error " + JSON.stringify(fireauthstate)));
	}
  }
}
