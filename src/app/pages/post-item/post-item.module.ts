import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from './components/comments/comments.component';
import { PostItemComponent } from './components/post-item/post-item.component';

import { PostModule } from 'src/app/shared/component/post/post.module';

import {MatButtonModule} from '@angular/material/button'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [CommentsComponent, PostItemComponent],
  imports: [
    CommonModule,
    PostModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatTreeModule,
    MatIconModule
  ]
})
export class PostItemModule { }
