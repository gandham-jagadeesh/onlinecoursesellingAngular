import { UserRole } from "../components/signup-form/signup-form-reactive.component"


export interface RegisterUser{
    role:UserRole
    email:string,
    password:string
}