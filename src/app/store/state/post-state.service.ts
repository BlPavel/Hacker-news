import { PostEffectService } from './../effect/post-effect.service';
import { IHit } from './../../shared/interfaces/hit';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostStateService {

  private _pageSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(1)

  private _postsSubject$: BehaviorSubject<IHit[]> = new BehaviorSubject<IHit[]>([])

  public readonly posts$: Observable<IHit[]> = this._postsSubject$.asObservable()

  constructor(private readonly _postEffect: PostEffectService) {
    if(this._postsSubject$.value.length === 0){
      this.changePage(this._pageSubject$.value)
    }
  }

  public changePage(page: number): void{
    try{
      this._postEffect.getByPage(page).pipe(
        tap(
          hits =>{
            this._postsSubject$.next(hits),
            this._pageSubject$.next(page)
          }
        ),
        delay(1000)
      ).subscribe()
    }
    catch(error){
      console.log(error)
    }
  }
}
