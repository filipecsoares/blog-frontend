import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostApiService } from '../post-api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

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
  categories: [];
  tags: [];
  isLoadingResults = false;

  constructor(private router: Router, private api: PostApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title : [null, Validators.required],
      content : [null, Validators.required],
      user : [null, Validators.required]
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
