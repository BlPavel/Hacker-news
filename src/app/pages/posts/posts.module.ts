import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';

import { PostModule } from 'src/app/shared/component/post/post.module';



@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostModule],
  exports: [PostsComponent]
})
export class PostsModule { }
