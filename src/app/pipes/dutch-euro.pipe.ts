import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'dutchEuro'
})
export class DutchEuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const currencyPipe = new CurrencyPipe('nl');
    const result = currencyPipe.transform(value , 'EUR');
    const result2 = result.split(',');
    return result2[0];
  }

}
