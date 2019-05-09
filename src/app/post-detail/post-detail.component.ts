import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostApiService } from '../post-api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post = { _id: '', title: '', content: '', createdAt: null, tags: null, user: null, categories: null, comments: null };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: PostApiService, private router: Router) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params.id);
  }

  getPostDetails(id) {
    this.api.getPost(id)
      .subscribe(data => {
        this.post = data;
        console.log(this.post);
        this.isLoadingResults = false;
      });
  }

  deletePost(id) {
    this.isLoadingResults = true;
    this.api.deletePost(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/posts']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
