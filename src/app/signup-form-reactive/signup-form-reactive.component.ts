import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatch } from '../validators/passwordValidators';
@Component({
  selector: 'app-signup-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form-reactive.component.html',
  styleUrl: './signup-form-reactive.component.css'
})


export class SignupFormReactiveComponent {
  loginForm:FormGroup = new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(7)]),
    confirmPassword:new FormControl("",[Validators.required,passwordMatch])
  },

);


 onSubmit(){
  //login form api
  console.log('clicked')
  console.log(this.loginForm.value)
 }

 

}

