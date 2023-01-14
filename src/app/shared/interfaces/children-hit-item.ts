export interface IChildrenHitItem {
  id: number,
  created_at: Date,
  created_at_i: number,
  type: string,
  author: string,
  title: string | null,
  url: string | null,
  text: string,
  points: number | null,
  parent_id: number,
  story_id: number,
  children: IChildrenHitItem[],
  options: []
}
