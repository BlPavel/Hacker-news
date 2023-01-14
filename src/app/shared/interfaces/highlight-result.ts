import { ICommentHighlightResult } from './comment-highlight-result';
import { IInfoHighlightResult } from "./info-highlight-result";

export interface IHighlightResult {
  author: IInfoHighlightResult,
  comment_text: ICommentHighlightResult,
  story_title: IInfoHighlightResult,
  story_url: IInfoHighlightResult,
}
