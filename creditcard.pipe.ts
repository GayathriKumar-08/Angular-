import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {
    
  transform(plainCreditCard: string): string {
      const visibleDigits = 4;
      let masked = plainCreditCard.slice(0, -visibleDigits);
      let visible = plainCreditCard.slice(-visibleDigits);
      return masked.replace(/./g, '*') + visible;
    }
  

}
