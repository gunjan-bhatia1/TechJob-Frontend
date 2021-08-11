import { Component, OnInit } from '@angular/core';
import { Technician } from '../technician/technician.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicianDataService } from '../service/data/technician-data.service';

@Component({
  selector: 'app-single-technician',
  templateUrl: './single-technician.component.html',
  styleUrls: ['./single-technician.component.css']
})
export class SingleTechnicianComponent implements OnInit {
  id:number;
  userId:number;
  userType:number;
  singleTechnician:Technician;
  email:string
  currentDepartment=null;
  currentId=-1;
  userLocality:string
  constructor(private technicianService: TechnicianDataService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userType=this.route.snapshot.params['userType'];
    this.userId=this.route.snapshot.params['userId'];
    this.userLocality=this.route.snapshot.params['userLocality'];
    this.singleTechnician=new Technician(this.id,'','','','','','',''); 
    this.email=sessionStorage.getItem('user');
    if(this.id!=-1){
    this.technicianService.retrieveTechnician(this.userType,this.id).subscribe(
      data=> this.singleTechnician = data
     
    )}
  }


  gotoTechnicianPage()
  {
    this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
  }
  goToJobs()
  {
    this.router.navigate(['jobs',this.userType,this.userId,this.userLocality])
  }

  saveTechnician(){
    if(this.id==-1){
      this.technicianService.createTechnician(this.userId,this.singleTechnician).subscribe(
        data=>{
       
          this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
  
        }
      )
      }
    else{
    this.technicianService.updateTechnician(this.userType,this.userId,this.id,this.singleTechnician).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
      }
    )
  }}
  about()
  {
    this.router.navigate(['about','techJob']);
  }
}
