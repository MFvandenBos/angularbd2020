import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'dutchEuro'
})
export class DutchEuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const currencyPipe = new CurrencyPipe('nl');
    // Een geheel getal wordt default door currency pipe met ,00 afgebeeld
    // Misschien moet dit wel een eigen test krijgen?
    const rawOutput = currencyPipe.transform(value , 'EUR');
    return rawOutput.replace(',00', '');
  }

}
