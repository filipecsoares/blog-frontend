import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'List of Posts' }
  },
  {
    path: 'post-details/:id',
    component: PostDetailComponent,
    data: { title: 'Post Details' }
  },
  {
    path: 'post-add',
    component: PostAddComponent,
    data: { title: 'Add Post' }
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent,
    data: { title: 'Edit Post' }
  },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
