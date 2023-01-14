import { IHighlightResult } from "./highlight-result"

export interface IHit {
  created_at: Date,
  title: string | null,
  url: string | null,
  author: string,
  points: number | null,
  story_text: string | null,
  comment_text: string,
  num_comments: number | null,
  story_id: number,
  story_title: string,
  story_url: string | null,
  parent_id: number,
  created_at_i: number,
  _tags: string[],
  objectID: string,
  _highlightResult: IHighlightResult
}
