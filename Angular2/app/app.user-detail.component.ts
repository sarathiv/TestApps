import { Component, Input } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'my-user-detail',
  template: `
    <div *ngIf="user">
      <h2>{{user.firstname}}  {{user.lastname}} details!</h2>
      <div><label>email: </label>{{user.email}}</div>
    </div>
  `
})
export class UserDetailComponent {
 @Input()
  user: User;
}
