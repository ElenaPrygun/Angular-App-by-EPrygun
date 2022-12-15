import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUAH',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return '₴' + value;
  }
}

// new Intl.NumberFormat('en-IN', {
//   style: 'currencyUAH',
//   currency: 'UAH',
// }).format(Number(value));
