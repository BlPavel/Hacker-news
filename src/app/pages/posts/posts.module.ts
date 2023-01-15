import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';

import { PostModule } from 'src/app/shared/component/post/post.module';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
