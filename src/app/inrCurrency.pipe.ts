import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
})
export class CurrencyConversionPipe implements PipeTransform {
  transform(value: string | number): string {
    const exchangeRate = 82.26;
    const amount =
      typeof value === 'string' ? parseFloat(value.replace('$', '')) : value;
    const convertedAmount = amount * exchangeRate;
    return `₹${convertedAmount.toFixed()}`;
  }
}
