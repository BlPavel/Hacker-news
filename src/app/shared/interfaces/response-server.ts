import { IHit } from './hit';

export interface IResponseServer {
  hits: IHit[],
  nbHits: number,
  page: number,
  nbPages: number,
  hitsPerPage: number,
  exhaustiveNbHits: boolean,
  exhaustiveTypo: boolean,
  exhaustive: {},
  query: string,
  params: string,
  processingTimeMS: number,
  processingTimingsMS: {},
  serverTimeMS: number
}
