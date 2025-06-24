import { Routes } from '@angular/router';

import { LoginFormReactiveComponent } from './components/login-form/login-form-reactive.component'
import { SignupFormReactiveComponent } from './components/signup-form/signup-form-reactive.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authGuard } from './guards/auth.guard';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { Component } from '@angular/core';
import { CourseCurriculumComponent } from './components/instructor/course-curriculum/course-curriculum.component';

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
    },
    {
    path:'instructor',
    component:InstructorComponent,
    children:[{
        path:'create',
        component:CourseCurriculumComponent
    }]
  },
    {
        path:'**',
        component:ErrorComponentComponent 
    }
];
