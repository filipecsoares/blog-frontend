import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'createdAt'];

  data: User[] = [];
  isLoadingResults = true;

  constructor(private api: UserApiService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        this.data = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
