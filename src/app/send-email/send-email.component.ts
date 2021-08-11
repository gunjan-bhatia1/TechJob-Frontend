import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmailService } from '../service/email.service';

export class emailInfo{
  constructor(
   
    public recieverId: String,
    public subject: String,
    public info: String,
    
    ){

  }
}

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})


export class SendEmailComponent implements OnInit {

  email: string
  details:emailInfo
  userType:string
  userId:string
  userLocality
  constructor( private emailService: EmailService, private route:ActivatedRoute,private router: Router,private httpClient: HttpClient) { }
  

  ngOnInit(): void {
    this.email=sessionStorage.getItem('user');
    this.details=new emailInfo('','','');
    this.userType=this.route.snapshot.params['userType'];
    this.userId=this.route.snapshot.params['userId'];
    this.userLocality=this.route.snapshot.params['userLocality'];
  }
 
  sendEmail()
  {
    this.emailService.sendMail(this.details,this.userId).subscribe(
      data=>{
        console.log(data)
       if(this.userType==='Technician')
       this.router.navigate(['technicianJobs',this.userType,this.userId]);
       else
       this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
    })
  }
  about()
  {
    this.router.navigate(['about','techJob']);
  }
}
