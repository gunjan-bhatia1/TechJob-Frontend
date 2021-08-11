import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
//import { User } from './User';

import { Technician } from '../technician/technician.component';
import { LoginHandlingService } from '../service/login-handling-service.service';


export class User{
 
  constructor(
   
public userId:number,
public email:string,
public password:string,
public userName:string,
public userType:string,
public locality:string
    ){
  
    }}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User(0,"","","","","");
  id:number
  usertype='Admin'
  username ='Gunjan'
  password=''
  email='gunjan.bhatia2609@gmail.com'
  errorMessage='Invalid Credentials'
  invalidLogin=false
  errors: any;
 
  
  constructor(private router:Router,
    private loginHandlingService: LoginHandlingService) { }

  ngOnInit() {
  
  }

  
  handleLogin(){
  
    this.loginHandlingService.login(this.user)
    .subscribe (
        (data:any) => {
console.log(this.user.email);
if(this.user.userType==='Technician')
{
  console.log(data.email);
  this.user.userId=data.technician_id;
}
else { 
  console.log(data.user_id);
  this.user.userId=data.user_id; 
   this.user.locality=data.locality;
   this.user.userType=data.userType;}

 console.log(this.user.userType);
 console
  
       if(data!=null)
       { sessionStorage.setItem('user',data.email);
         
     
  
        // this.router.navigate(['jobs',this.user.userId])
      
        if(this.user.userType==='Technician')
        this.router.navigate(['technicianJobs',this.user.userType,this.user.userId]);
        else
        this.router.navigate(['jobs',this.user.userType,this.user.userId,this.user.locality])
        //this.router.navigate(['logout'])
       }
      },
      error =>  {
          console.log(error);
          this.errors = error
      }
     
  )
    } 
  
  handleSignup(){
    this.router.navigate(['register'])
  }
 
  about()
  {
    this.router.navigate(['about','techJob']);
  }
}

  