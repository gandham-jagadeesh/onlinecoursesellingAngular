import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { userLogin } from '../models/userLogin.model';
import {registerResponse} from '../models/registerResponse.mode'
import { loginResponse } from '../models/loginResponse.model';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  private http = inject(HttpClient);
  constructor() { }

   register(user :RegisterUser):Observable<registerResponse>{
    return this.http.post<registerResponse>("http://localhost:3000/users/register",user);
   }

   refresh(){
    return this.http.post<loginResponse>("http://localhost:3000/users/refresh",{});
   }

   login(user:userLogin){
    return this.http.post<loginResponse>("http://localhost:3000/auth/login",user);
   }
}
