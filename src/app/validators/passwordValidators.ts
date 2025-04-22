import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function strongPassword():void{

}


 export  function passwordMatch(control:AbstractControl):ValidationErrors|null{
    const confirmedPassword = control?.value;
    const password  = control?.parent?.get('password')?.value
    if(!password){
        return null;
    }
    return confirmedPassword === password?null:{mismatch:true};
 }