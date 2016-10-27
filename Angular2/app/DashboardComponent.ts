import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from './user';
import { Value } from './value';
import { UserService } from './User.Service';
import { AngularFire,FirebaseListObservable,AuthProviders,AuthMethods} from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
@Input()
 user: User;
 carNumber:string;
 commandsWithData:FirebaseListObservable<any[]>;
 constructor(
    private route: ActivatedRoute,
    private router: Router,
	  private af: AngularFire,
    private userservice:UserService) {
      this.carNumber="Empty";
  }

  ngOnInit(): void {
    if(this.af.auth.getAuth())
    {
        console.log(this.af.auth.getAuth().uid);
        console.log(this.af.auth.getAuth().provider);
        console.log(this.af.auth.getAuth().auth.email);
        this.userservice.getUser(this.af.auth.getAuth().auth.email).then( user=>
        {
          if(user)
          {
            this.user = user;
            this.loadCarDetails(user.carNumber);
          }
          else
          {
            console.log("User is null");
            this.router.navigate(['/login']);
          }
        });
    }else
    {
      console.log("Not authenticated");
      this.router.navigate(['/login']);
    }
	}
  refreshCar():void
  {
    this.loadCarDetails(this.carNumber);
  }
  private loadCarDetails(carNumber:string):void
  {
    this.carNumber = carNumber;
    let queryObservable = this.af.database.list('/cars/'+carNumber);
    queryObservable.subscribe(queriedItems => {
      console.log("child count :" + queriedItems.length);
       for(let item of queriedItems)
       {
        console.log("item:" + item['$key']);
      }
    });
    console.log(this.carNumber);
    console.log('/cars/'+this.carNumber+'/RPM');
    this.commandsWithData = this.af.database.list('/cars/'+carNumber);
  }
}
