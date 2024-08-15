import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedBrand'
})
export class NestedBrandPipe implements PipeTransform {

  transform(value: any): string {
    if (value && value.brand) {
      return value.brand.name;
    }
    return '';
  }

}
