import { CanActivateFn, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const userService:UserService = inject(UserService);
  const router:Router = inject(Router);

  return userService.user$.pipe(map((user)=>{
    if(user){
      return true;
    }
    else{
      return router.createUrlTree(['/login'])
    }
  }))
};
