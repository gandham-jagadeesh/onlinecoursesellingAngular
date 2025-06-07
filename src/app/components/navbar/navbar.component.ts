import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models/userInfo.model';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   user$:Observable<UserInfo|null>
   router = inject(Router);
  constructor(private readonly userService:UserService){
    this.user$ = userService.user$;
  }

  logout(){
    this.userService.clearUser();
    this.router.navigate(['./login'])
  }
}
