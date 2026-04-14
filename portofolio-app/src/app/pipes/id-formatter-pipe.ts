import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'idFormatter',
})
export class IdFormatterPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 10) return '0' + value.toString();
    return value.toString();
  }
}
