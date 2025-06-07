import { UserRole } from "../components/signup-form/signup-form-reactive.component"

export interface registerResponse{
  message:string,
  data:{
    id:number,
    email:string,
    role:UserRole
  }
}