import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { InfoComponent } from './components/info/info.component';



@NgModule({
  declarations: [
    PostComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
