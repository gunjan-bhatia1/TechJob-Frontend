import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { User } from '../login/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user:User=new User();
  email:string
  constructor( private hardcodedAuthenticationService: HardcodedAuthenticationService,private router:Router
    ) { }

  ngOnInit() {
   // this..logout();
   this.email=sessionStorage.getItem('user');
   sessionStorage.removeItem('user');
  }
  handleLogout(){
      sessionStorage.setItem('user',this.user.email);
  
}
about()
{
  this.router.navigate(['about','techJob']);
}
}
