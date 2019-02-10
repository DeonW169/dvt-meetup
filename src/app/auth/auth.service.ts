import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  token = '5c4392b6c4f7cc67271254ac6f23';
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {}

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };

    this.authSuccesfully();
  }

  logout() {
    this.user = null;
    this.token = null;

    sessionStorage.clear();
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccesfully() {
    sessionStorage.setItem('token', this.token);

    this.authChange.next(true);
    this.router.navigate(['/settings']);
  }
}
