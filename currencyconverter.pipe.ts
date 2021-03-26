import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {
  
  transform(curr: number):any {
    curr = curr * 0.137941;
      console.log("the converted amount:"+ curr + " USD");
  }

}
