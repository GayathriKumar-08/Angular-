import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any):number{
    const val = Date.now() - new Date(value).getTime();
    const age= new Date(val);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

}
