import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceLink'
})
export class SliceLinkPipe implements PipeTransform {

  transform(link: string | null): string {
    if(link === null) return ""
    else {
      const split: string[] = link.split('/')
      const join: string = split[0] + '//' + split[1] + split[2]
      return join
    }
  }
}
