import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === undefined || filterString === '') {
      return value;
    }

    const products = [];

    for (const product of value) {
      if (product['name'] === filterString) {
        products.push(product)
      }
    }
    return products
  }







}
