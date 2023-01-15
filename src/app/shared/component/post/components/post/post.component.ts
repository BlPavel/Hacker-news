import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  public title!: string

  @Input()
  public linkNews!: string | null

  public author!: string

  @Input()
  public set setAuthor(author: string){
    this.author = `by ${author}`
  }

  public points!: string

  @Input()
  public set setPoints(points: number | null){
    if(points === null) {
      this.points = '0 points'
    } else {
      this.points = `${points} points`
    }
  }

  public comments!: string

  @Input()
  public set setComments(comments: number | null){
    if(comments === null) {
      this.comments = '0 comments'
    } else {
      this.comments = `${comments} + comments`
    }
  }

  @Input()
  public id!: number
}
