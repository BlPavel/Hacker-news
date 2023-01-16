import { IHitItem } from './../../../../shared/interfaces/hit-item';
import { IHit } from './../../../../shared/interfaces/hit';
import { Observable, map } from 'rxjs';
import { PostStateService } from './../../../../store/state/post-state.service';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit {

  public get id(): number{
    const id: string | null = this._activetedRoute.snapshot.paramMap.get('id')
    if(id){
      return +id
    } else {
      return 0
    }
  }

  public posts$!: Observable<IHit[]>

  public postItems$!: Observable<IHitItem[]>

  public isLoad$!: Observable<boolean>

  constructor(private readonly _postState: PostStateService, private _activetedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.isLoad$ = this._postState.isLoad$

    this.posts$ = this._postState.posts$.pipe(
      map(
        posts =>{
          return posts.filter(
            post =>{
              if(post.story_id){
                return post.story_id === this.id
              } else{
               return +post.objectID === this.id
              }
            }
          )
        }
      )
    )

    this.postItems$ = this._postState.postItems$.pipe(
      map(
        postItems =>{
          return postItems.filter(
            postItem =>{
              return postItem.id === this.id
            }
          )
        }
      )
    )
  }
}
