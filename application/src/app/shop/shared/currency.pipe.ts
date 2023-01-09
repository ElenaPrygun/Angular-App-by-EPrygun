import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUAH',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return '₴' + value;
  }
}

