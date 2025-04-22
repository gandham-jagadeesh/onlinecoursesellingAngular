import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import { LoginFormReactiveComponent } from './login-form-reactive/login-form-reactive.component';
import { SignupFormReactiveComponent } from './signup-form-reactive/signup-form-reactive.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/login',
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
