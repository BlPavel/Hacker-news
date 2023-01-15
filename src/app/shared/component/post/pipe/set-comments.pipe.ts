import { IChildrenHitItem } from './../../../interfaces/children-hit-item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'setComments' })
export class SetCommentsPipe implements PipeTransform {

  private _result: number = 0

  transform(comments: IChildrenHitItem[]): string {
    this._countComments(comments)
    if(!this._result){
      return `0 comments`
    } else{
      return `${this._result} comments`
    }
  }

  private _countComments(comments: IChildrenHitItem[]): void{
    this._result += comments.length
    for (let i = 0; i < comments.length; i++){
      if(comments[i].children.length !== 0){
        this._countComments(comments[i].children)
      }
    }
  }
}
