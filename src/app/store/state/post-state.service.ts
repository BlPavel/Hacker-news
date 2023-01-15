import { PostEffectService } from './../effect/post-effect.service';
import { IHit } from './../../shared/interfaces/hit';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostStateService {

  private _pageSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  private _postsSubject$: BehaviorSubject<IHit[]> = new BehaviorSubject<IHit[]>([])

  public readonly posts$: Observable<IHit[]> = this._postsSubject$.asObservable()

  private _isLoadSubject$:  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public readonly isLoad$: Observable<boolean> = this._isLoadSubject$.asObservable()

  constructor(private readonly _postEffect: PostEffectService) {
    if(this._postsSubject$.value.length === 0){
      this.changePage(0)
    }
  }

  public changePage(nextPage: number): void{
    const page: number = this._pageSubject$.value + nextPage
    try{
      if(page === 0) return
      this._isLoadSubject$.next(false)
      this._postEffect.getByPage(page).pipe(
        tap(
          hits =>{
            this._postsSubject$.next(hits),
            this._pageSubject$.next(page)
            this._isLoadSubject$.next(true)
          }
        )
      ).subscribe()
    }
    catch(error){
      console.log(error)
    }
  }
}
