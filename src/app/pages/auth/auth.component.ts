import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  
  searchQuery = '';
  users: any[] = [];
  headers: string[] = ['id', 'username', 'email'];

  constructor( 
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getAll(1, 100).subscribe(response => {
      this.users = response.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email
      }));
    });
  }

}
