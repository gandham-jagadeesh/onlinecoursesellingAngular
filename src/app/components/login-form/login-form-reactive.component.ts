import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserRole } from '../signup-form/signup-form-reactive.component';

interface user{
  email:string,
  password:string;
  role:UserRole
}

@Component({
  selector: 'app-login-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form-reactive.component.html',
  styleUrl: './login-form-reactive.component.css'
})
export class LoginFormReactiveComponent {
  users:user[]=[];

  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  });


  onSubmit(){
    if(this.loginForm.valid){
      this.users.push(this.loginForm.value);
      console.log(this.users);
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

}
