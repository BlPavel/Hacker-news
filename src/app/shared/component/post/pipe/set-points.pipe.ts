import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'setPoints' })
export class SetPointsPipe implements PipeTransform {

  transform(points: number | null): string {
    if(points === null) {
      return '0 points'
    } else {
      return `${points} points`
    }
  }
}
