import { IHitItem } from './../../shared/interfaces/hit-item';
import { IHit } from './../../shared/interfaces/hit';
import { IResponseServer } from './../../shared/interfaces/response-server';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostEffectService {

  constructor(private readonly _http: HttpClient) {}

  public getByPage(page: number): Observable<IHit[]>{
    return this._http.get<IResponseServer>('http://hn.algolia.com/api/v1/search_by_date?query=' + page).pipe(
      shareReplay(1),
      map( response => {
        return response['hits']
      })
    )
  }

  public getById(id: number): Observable<IHitItem>{
    return this._http.get<IHitItem>('http://hn.algolia.com/api/v1/items/' + id).pipe(
      shareReplay(1),
    )
  }
}
