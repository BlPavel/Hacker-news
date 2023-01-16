import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/components/posts/posts.component';
import { PostItemComponent } from './pages/post-item/components/post-item/post-item.component';

const routes: Routes = [
  { path: 'front_page', component: PostsComponent },
  { path: '', redirectTo: '/front_page', pathMatch: 'full' },
  { path: 'comments', loadChildren: ()=> import('./pages/post-item/post-item.module').then(m=> m.PostItemModule) },
  { path: 'comments/:id', component: PostItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
