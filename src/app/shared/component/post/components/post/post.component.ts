import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IChildrenHitItem } from 'src/app/shared/interfaces/children-hit-item';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @Input()
  public points!: number | null

  @Input()
  public comments!: IChildrenHitItem[]

  @Input()
  public id!: number
}
