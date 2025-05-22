import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterUser } from '../models/user.model';
import { Observable } from 'rxjs';


interface registerResponse{
  message:string,
  status:string,
  data:{
    id:string,
    email:string,
    role:string
  }
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  
  private http = inject(HttpClient);
  constructor() { }

   register(user :RegisterUser):Observable<registerResponse>{
    return this.http.post<registerResponse>("http://localhost:3000/users/register",user);
   }
}
