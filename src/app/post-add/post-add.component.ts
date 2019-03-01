import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostApiService } from '../post-api.service';
import { CategoryApiService } from '../category-api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Category } from '../models/category';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  postForm: FormGroup;
  title: string;
  content: string;
  user: {};
  categories: Category[] = [];
  category: {}
  tags: [];
  isLoadingResults = false;

  constructor(private router: Router, private api: PostApiService, private apiCategory: CategoryApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title : [null, Validators.required],
      content : [null, Validators.required]
    });
    this.apiCategory.getCategories()
      .subscribe(res => {
        this.categories = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPost(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/post-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
