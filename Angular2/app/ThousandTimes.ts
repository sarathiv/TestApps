import { Pipe ,PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandTimes',
  pure: false
})

export class ThousandTimes implements PipeTransform {
  transform(object:any) {
    if(object)
    {
      //console.log("ThousandTime:" + object );
      return +object*1000;
    }else
    {
      //console.log("ThousandTime not possible for:" + object );
      return object;
    }
  }
}
