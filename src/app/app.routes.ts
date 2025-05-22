import { Routes } from '@angular/router';

import { LoginFormReactiveComponent } from './components/login-form/login-form-reactive.component'
import { SignupFormReactiveComponent } from './components/signup-form/signup-form-reactive.component';

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
    }
];
