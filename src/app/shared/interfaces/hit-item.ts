import { IChildrenHitItem } from "./children-hit-item"

export interface IHitItem {
  id: number,
  created_at: Date,
  created_at_i: number,
  type: string,
  author: string,
  title: string,
  url: string | null,
  text: string | null,
  points: number,
  parent_id: number | null,
  story_id: number | null,
  children: IChildrenHitItem[]
}
