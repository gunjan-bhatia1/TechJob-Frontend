import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/login.component';
//import { User } from '../login/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginHandlingService {
  id:number
user:User

user1:User
  constructor(private http:HttpClient
    ) { 
     
    }
    
    
  signUp(user) {
   console.log("account created");
    return this.http.post(`http://localhost:8080/user/signUp`,user);
    //console.log("Execute Hello World Bean Service")
  }
  
 public login(user){
 //  console.log("Login api called");
   console.log("hey");
  // this.http.get<jobb[]>
  if(user.userType=='Technician')
  return this.http.post(`http://localhost:8080/technician/login`,user);
  else
  return this.http.post(`http://localhost:8080/user/login`,user);
  
  }


}
 

