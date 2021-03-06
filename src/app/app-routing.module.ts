import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

import { UsersComponent } from './users/users.component';

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
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    data: { title: 'List of Categories' }
  },
  {
    path: 'category-add',
    component: CategoryAddComponent,
    data: { title: 'Add Category' }
  },
  {
    path: 'category-details/:id',
    component: CategoryDetailComponent,
    data: { title: 'Category Details' }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'List of users' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
