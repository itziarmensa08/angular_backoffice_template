import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  
  searchQuery = '';
  users: User[] = [];
  headers: string[] = ['name', 'surnames', 'email'];

  total = 0;
  pageSize = 10;
  currentPage = 0;

  constructor( 
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchData(this.currentPage, this.pageSize);
  }

  fetchData(skip: number, limit: number) {
    this.userService.getAll(0, 10).subscribe(response => {
      this.users = response['items'].map((user: { name: any; surnames: any; email: any; }) => ({
        name: user.name,
        surnames: user.surnames,
        email: user.email
      }));
      this.total = response['max_pages'];
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    const skip = this.currentPage * this.pageSize;
    this.fetchData(skip, this.pageSize);
  }

}
