import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, maxlength: any = 4): any {
    if(value.length > maxlength) {
      return value.substring(0, maxlength) + '***';
    } else {
      return value;
    }
  }

}
