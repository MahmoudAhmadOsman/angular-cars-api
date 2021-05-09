import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descShortner'
})
export class DescShortnerPipe implements PipeTransform {

  transform(desc: string, n: number): string {
    return desc.substr(0, n)
  }

}
