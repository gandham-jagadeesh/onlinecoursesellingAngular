import { Routes } from '@angular/router';

import { LoginFormReactiveComponent } from './components/login-form/login-form-reactive.component'
import { SignupFormReactiveComponent } from './components/signup-form/signup-form-reactive.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authGuard } from './guards/auth.guard';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/signup',
        pathMatch:"full"    
    },
    {
        path:"login",
        component:LoginFormReactiveComponent
    },{
        path:'signup',
        component:SignupFormReactiveComponent
    },
    {
        path:'navbar',
        component:NavbarComponent,
        canActivate:[authGuard]
    },{
        path:'**',
        component:ErrorComponentComponent 
    }
];
