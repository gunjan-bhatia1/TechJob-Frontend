import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../login/login.component';
import { URLSearchParams } from 'url';
import { LoginHandlingService } from '../service/login-handling-service.service';
//import { LoginHandlingService } from '../service/login-handling-service.service.spec';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User
id:number
email:string
  constructor(private router:Router,private loginHandlingService:LoginHandlingService) { }
  ngOnInit() {
  
this.email=sessionStorage.getItem('user');
    this.user=new User(this.id,"","","","","");
  }

 
  handleSignup(){
//console.log("ui vala" +this.user.locality);
    if(this.id === -1) {
      this.loginHandlingService.signUp(this.user)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['login'])
            }
          )

    }
    else{
    this.loginHandlingService.signUp(this.user).subscribe(
      data=>{
       console.log(data);
       

        this.router.navigate(['login']);
      }
    )}
   
  }
  about()
  {
    this.router.navigate(['about','techJob']);
  }
}
