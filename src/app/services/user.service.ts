import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../models/userInfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userSubject = new BehaviorSubject<UserInfo|null>(null);
  user$       = this.userSubject.asObservable();

  constructor() { }

  setUser(user:UserInfo){
    this.userSubject.next(user)
  }

  clearUser(){
    this.userSubject.next(null);
  }

  getUser(){
    return this.userSubject.value;
  }

}
