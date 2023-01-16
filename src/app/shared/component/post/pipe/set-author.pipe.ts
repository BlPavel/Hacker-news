import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'setAuthor' })
export class SetAuthorPipe implements PipeTransform {

  transform(author: string): string {
    return `by ${author}`
  }

}
