import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryApiService } from '../category-api.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  category: Category = { id: '', name: '', createdAt: null };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: CategoryApiService, private router: Router) { }

  ngOnInit() {
    this.getCategoryDetails(this.route.snapshot.params.id);
  }

  getCategoryDetails(id) {
    this.api.getCategory(id)
      .subscribe(data => {
        this.category = data;
        this.isLoadingResults = false;
      });
  }

  deleteCategory(id) {
    this.isLoadingResults = true;
    this.api.deleteCategory(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/categories']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
