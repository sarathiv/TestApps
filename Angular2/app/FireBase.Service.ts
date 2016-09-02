import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class FireBaseService {
 constructor(private af: AngularFire) {
  }
  ref(refto:string): any {
       return this.af.database.list(refto);
    }
}
