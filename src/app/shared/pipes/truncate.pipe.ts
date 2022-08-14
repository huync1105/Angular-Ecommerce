import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let data: any;
    if (value.length <= limit) {
      return value;
    } else {
      data = value.split("");
      data.splice(limit, value.length - limit, '...');
      return data.join("");
    }
  }

}
