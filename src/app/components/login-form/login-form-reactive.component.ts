import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form-reactive.component.html',
  styleUrl: './login-form-reactive.component.css'
})
export class LoginFormReactiveComponent {

  constructor(private readonly router:Router,private readonly authService:AuthService,private readonly userService:UserService){

  }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  });


  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          this.userService.setUser(res.user);
          this.router.navigateByUrl('/navbar');
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

}
