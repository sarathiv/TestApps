import { Pipe ,PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArr',
  pure: false
})

export class ObjToArr implements PipeTransform {
  transform(object:any) {
    var newArray = []
    for (var key in object) {
        newArray.push(object[key]);
    }
    return newArray;
  }
}
