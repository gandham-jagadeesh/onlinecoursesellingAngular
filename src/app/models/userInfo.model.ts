import { UserRole } from "../components/signup-form/signup-form-reactive.component";

export interface UserInfo{
    id:number,
    role:UserRole,
    email:string
}