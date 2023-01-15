import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { InfoComponent } from './components/info/info.component';
import { RouterModule } from '@angular/router';
import { SliceLinkPipe } from './pipe/slice-link.pipe';
import { SetPointsPipe } from './pipe/set-points.pipe';
import { SetCommentsPipe } from './pipe/set-comments.pipe';



@NgModule({
  declarations: [PostComponent, InfoComponent, SliceLinkPipe, SetPointsPipe, SetCommentsPipe],
  imports: [CommonModule, RouterModule],
  exports: [PostComponent]
})
export class PostModule { }
