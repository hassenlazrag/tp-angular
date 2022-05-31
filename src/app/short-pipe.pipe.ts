import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipePipe implements PipeTransform {

  transform(value: string, sizeMax: number): string {
    if (value.length > sizeMax) return value.substring(0, sizeMax) + '...';
    else return value;
  }

}
