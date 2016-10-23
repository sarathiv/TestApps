import { Component } from '@angular/core';
@Component({
  selector: 'my-landing',
  templateUrl: './app/header.html'
})
export class LandingComponent {
isLoggedIn: boolean;
	constructor()
	{
		this.isLoggedIn = false;		
	} 
}
