import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'dutchEuro'
})
export class DutchEuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const currencyPipe = new CurrencyPipe('nl');
    return currencyPipe.transform(value , 'EUR');
  }

}
