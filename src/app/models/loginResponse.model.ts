import { UserRole } from "../components/signup-form/signup-form-reactive.component"

export interface loginResponse{
  message:string,
  user:{
    id:number,
    email:string,
    role:UserRole
  }
}