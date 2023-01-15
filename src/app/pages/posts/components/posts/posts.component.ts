import { IHitItem } from './../../../../shared/interfaces/hit-item';
import { IHit } from './../../../../shared/interfaces/hit';
import { Observable } from 'rxjs';
import { PostStateService } from './../../../../store/state/post-state.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {

  public posts$!: Observable<IHit[]>

  public isLoad$!: Observable<boolean>

  public postItems$!: Observable<IHitItem[]>

  constructor(private readonly _postState: PostStateService){}

  ngOnInit(): void {
    this.isLoad$ = this._postState.isLoad$
    this.posts$ = this._postState.posts$
    this.postItems$ = this._postState.postItems$
  }

  public previousPage(): void{
    this._postState.changePage(-1)
  }

  public nextPage(): void{
    this._postState.changePage(1)
  }
}
