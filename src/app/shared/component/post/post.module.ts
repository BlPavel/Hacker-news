import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { InfoComponent } from './components/info/info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PostComponent, InfoComponent],
  imports: [CommonModule, RouterModule],
  exports: [PostComponent]
})
export class PostModule { }
