import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { LoginHandlingService } from '../service/login-handling-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean=false;
 

  constructor(public loginHandLingService:LoginHandlingService ) { }

  ngOnInit(): void {
   
  }

}
