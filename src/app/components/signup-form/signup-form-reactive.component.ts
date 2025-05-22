import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatch } from '../../validators/passwordValidators';
import { RegisterUser } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

export enum UserRole{
  Student = 'student',
  Instructor = 'instructor'
}



@Component({
  selector: 'app-signup-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form-reactive.component.html',
  styleUrl: './signup-form-reactive.component.css'
})

export class SignupFormReactiveComponent {
  isRegister = false;
  constructor(private authService:AuthService,private router:Router ){

 }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(7)]),
    confirmPassword:new FormControl("",[Validators.required,passwordMatch]),
    role:new FormControl(UserRole.Student,[Validators.required])
  },

);


 onSubmit(){
   const User:RegisterUser= {
    email:this.loginForm.value['email'],
    password:this.loginForm.value['password'],
    role:this.loginForm.value['role']
   }
   console.log(User);
   this.authService.register(User).subscribe({
    next:(res)=>{
      console.log(res);
      this.isRegister = true;
      this.router.navigateByUrl('/login');
    },
    error:(err)=>{
      console.log(err);
    }
   });

  }

 

}

