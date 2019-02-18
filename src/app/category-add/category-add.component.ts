import { Component, OnInit } from '@angular/core';
import { CategoryApiService } from '../category-api.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  form: FormGroup;
  name: string;
  isLoadingResults = false;

  constructor(private router: Router, private api: CategoryApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCategory(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/categories']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
