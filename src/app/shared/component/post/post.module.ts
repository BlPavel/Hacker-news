import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './components/post/post.component';
import { InfoComponent } from './components/info/info.component';


import { SliceLinkPipe } from './pipe/slice-link.pipe';
import { SetPointsPipe } from './pipe/set-points.pipe';
import { SetCommentsPipe } from './pipe/set-comments.pipe';
import { SetAuthorPipe } from './pipe/set-author.pipe';



@NgModule({
  declarations: [PostComponent, InfoComponent, SliceLinkPipe, SetPointsPipe, SetCommentsPipe, SetAuthorPipe],
  imports: [CommonModule, RouterModule],
  exports: [PostComponent]
})
export class PostModule { }
