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

  @Input()
  public author!: string

  public points!: number

  @Input()
  public set setPoints(points: number | null){
    if(points === null) {
      this.points = 0
    } else {
      this.points = points
    }
  }

  public comments!: number | null

  @Input()
  public set setComments(comments: number | null){
    if(comments === null) {
      this.comments = 0
    } else {
      this.comments = comments
    }
  }

  @Input()
  id!: number
}
