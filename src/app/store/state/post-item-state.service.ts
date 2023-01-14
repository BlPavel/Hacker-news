import { IHitItem } from './../../shared/interfaces/hit-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, Subject, tap } from 'rxjs';
import { PostEffectService } from '../effect/post-effect.service';

@Injectable({ providedIn: 'root' })
export class PostItemStateService {

  private _postItem$: BehaviorSubject<null | IHitItem> = new BehaviorSubject<null | IHitItem>(null)

  private _idPost$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor(private readonly _postEffect: PostEffectService) {}

  public get(id: number){
    if(this._postItem$.value?.id === this._idPost$.value){
      return this._postItem$.asObservable()
    } else {
      this._get(id)
      return this._postItem$.asObservable()
    }
  }

  private _get(id: number): void{
    try{
      this._postEffect.getById(id).pipe(
        tap( item => {
          this._postItem$.next(item)
          this._idPost$.next(id)
        }),
        delay(1000)
      ).subscribe()
    }
    catch(error){
      console.log(error)
    }
  }
}
