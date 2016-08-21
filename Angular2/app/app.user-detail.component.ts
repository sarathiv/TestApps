import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user';
@Component({
  selector: 'my-user-detail',
  templateUrl: 'app/user-detail.component.html'
})

export class UserDetailComponent implements OnInit{
@Input()
 user: User;
  constructor(
    private route: ActivatedRoute) {
  }
     ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let email = params['email'];
    //  this.heroService.getHero(id)
      //  .then(hero => this.hero = hero);
      this.user = new User();
      this.user.email = email;
    });
  }
  goBack(): void {
    window.history.back();
  }
}
