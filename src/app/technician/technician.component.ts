//https://developer.here.com/blog/transportation-routing-and-directions-in-an-angular-application-with-the-here-routing-api
import { Component, OnInit } from '@angular/core';
import { TechnicianDataService } from '../service/data/technician-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
export class Technician{
constructor(
  public id:number,
  public name:string,
  public email:string,
  public password:string,
  public contactInfo:String,
  public department:String,
  public jobAssigned:String,
  public performance:String
){}}

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent implements OnInit {

  
  // technicians=[]
  technicians: Technician[]
  message:String
  userType:string
 userId:number
 email:string
 userLocality:string
  constructor(private technicianService: TechnicianDataService,private router: Router,private route: ActivatedRoute, private httpClient: HttpClient) { }
 
  ngOnInit(){
    this.userType=this.route.snapshot.params['userType'];
  this.userId=this.route.snapshot.params['userId'];
 this.email=sessionStorage.getItem('user');
 this.userLocality=this.route.snapshot.params['userLocality'];
  console.log(this.userId);
      this.refreshTechnician();
  }

  refreshTechnician(){
   
    this.technicianService.retrieveAllTechnicians(this.userType,this.userId).subscribe(
    response=>{
      
      this.technicians=response;})
}


deleteTechnician(id){
console.log(`${id}`);
this.technicianService.deleteTechnician(this.userType,id).subscribe(
  response=>{
    console.log(response);
    this.message=`Deletion of Technician ${id} successful!`;
    this.refreshTechnician();
  }
)
}

updateTechnician(id)
{
  this.router.navigate(['technician',this.userType,this.userId,'technicianId',id])
}

jobAssigned(id)
{
  this.router.navigate(['technicianJobs','Technician',id]);
  // this.router.navigate(['jobs',this.userType,this.userId,'technicianJobs',id])
}

addTechnician(){

  this.router.navigate(['technician',this.userType,this.userId,this.userLocality,'technicianId',-1])
}
gotoTechnicianPage()
  {
    this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
  }
goToJobs()
  {
    
    this.router.navigate(['jobs',this.userType,this.userId,this.userLocality])
  }
  sendMail()
  {
    this.router.navigate(['mail',this.userType,this.userId,this.userLocality])
  }
work(id)
{

 
  //return this.http.get<Technician[]>(`http://localhost:8080/users/${userType}/allTechnicians/${user_id}`)
  this.router.navigate(['viewPerformance',this.userType,this.userId,this.userLocality,'technicianId',id]);
  
}
about()
{
  this.router.navigate(['about','techJob']);
}
}
