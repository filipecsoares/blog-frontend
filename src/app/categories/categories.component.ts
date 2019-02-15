import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryApiService } from '../category-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'createdAt'];
  data: Category[] = [];
  isLoadingResults = true;

  constructor(private api: CategoryApiService) { }

  ngOnInit() {
    this.api.getCategories()
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
