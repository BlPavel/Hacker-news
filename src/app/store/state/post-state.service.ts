import { IHitItem } from './../../shared/interfaces/hit-item';
import { PostEffectService } from './../effect/post-effect.service';
import { IHit } from './../../shared/interfaces/hit';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, mergeMap, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostStateService {

  private _pageSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  private _postsSubject$: BehaviorSubject<IHit[]> = new BehaviorSubject<IHit[]>([])

  public readonly posts$: Observable<IHit[]> = this._postsSubject$.asObservable()

  private _isLoadSubject$:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public readonly isLoad$: Observable<boolean> = this._isLoadSubject$.asObservable()

  private _postItemsSubject$: BehaviorSubject<IHitItem[]> = new BehaviorSubject<IHitItem[]>([])

  public readonly postItems$: Observable<IHitItem[]> = this._postItemsSubject$.asObservable()

  constructor(private readonly _postEffect: PostEffectService) {
    if(this._postsSubject$.value.length === 0){
      this.getByPage(0)
    }
  }

  public getByPage(nextPage: number): void{
    const page: number = this._pageSubject$.value + nextPage
    try{
      if(page === 0) return
      this._isLoadSubject$.next(false)
      this._postEffect.getByPage(page).pipe(
        tap(
          hits =>{
            this._postsSubject$.next(hits),
            this._pageSubject$.next(page)
          }
        ),
        mergeMap( posts => {
          const result: Observable<IHitItem>[] = []
          posts.forEach( post =>{
            let postItem:Observable<IHitItem>
            if(post.story_id || post.objectID){
              const id: number = post.story_id ? post.story_id : +post.objectID
              postItem = this._postEffect.getById(id)
              result.push(postItem)
            }
          })
          return forkJoin(result).pipe(
            tap(postItems=>{
              this._postItemsSubject$.next(postItems)
              this._isLoadSubject$.next(true)
            })
          )
        })
      )
      .subscribe()
    }
    catch(error){
      console.log(error)
    }
  }
}
