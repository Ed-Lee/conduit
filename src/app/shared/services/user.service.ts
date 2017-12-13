import { Injectable } from '@angular/core';
import { User } from '../models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { JwtService } from './jwt.service';

@Injectable()
export class UserService {

  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
  //private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private isAuthenticatedSubject =new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService,
  private jwtService: JwtService) {

  }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next(new User());
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
    .map(
      data => {
        console.log(data.user);
        this.setAuth(data.user);
        return data;
      }
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

}
