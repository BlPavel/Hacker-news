import { IHitItem } from './../../shared/interfaces/hit-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PostEffectService } from '../effect/post-effect.service';

@Injectable({ providedIn: 'root' })
export class PostItemStateService {

  private _postItem$: BehaviorSubject<null | IHitItem> = new BehaviorSubject<null | IHitItem>(null)

  public readonly post$: Observable<null | IHitItem> = this._postItem$.asObservable()

  constructor(private readonly _postEffect: PostEffectService) {}

  public get(id: number): Observable<IHitItem | null>{
    if(this._postItem$.value?.id === id){
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
        })
      ).subscribe()
    }
    catch(error){
      console.log(error)
    }
  }
}
