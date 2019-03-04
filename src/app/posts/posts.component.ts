import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../post-api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'content', 'user'];
  data: Post[] = [];
  isLoadingResults = true;

  constructor(private api: PostApiService) { }

  ngOnInit() {
    this.api.getPosts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
