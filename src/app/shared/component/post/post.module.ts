import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { InfoComponent } from './components/info/info.component';
import { RouterModule } from '@angular/router';
import { SliceLinkPipe } from './pipe/slice-link.pipe';



@NgModule({
  declarations: [PostComponent, InfoComponent, SliceLinkPipe],
  imports: [CommonModule, RouterModule],
  exports: [PostComponent]
})
export class PostModule { }
