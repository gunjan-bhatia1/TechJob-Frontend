import { Component, OnInit } from '@angular/core';
import { JobDataService } from '../service/data/job-data.service';
import { jobb } from '../job/job.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicianDataService } from '../service/data/technician-data.service';
import { Technician } from '../technician/technician.component';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.css']
})
export class SingleJobComponent implements OnInit {

  id:number;
  userId:number;
  userType:string;
  singleJob:jobb;
  email:string;
  technicians:any;
  singleTechie:Technician;
  department:string;
 assignedTechnicianId=-1;
 userLocality:string
c:boolean
  constructor(private technicianDataService: TechnicianDataService, private jobService: JobDataService, private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
this.singleTechie=new Technician(0,'','','','','','',''); 
    this.id=this.route.snapshot.params['id'];
    this.userType=this.route.snapshot.params['userType'];
    if(this.userType==="Customer")
    this.c=true;
    else
    this.c=false;
    this.userLocality=this.route.snapshot.params['userLocality'];
    this.userId=this.route.snapshot.params['userId'];
    this.singleJob=new jobb(this.id,'','','',false,'','','','',-1,'','','','','',-1); 
    this.email=sessionStorage.getItem('user');
    if(this.id!=-1){
    this.jobService.retrieveJob(this.userType,this.id).subscribe(
      data=>{ this.singleJob = data
        
    }) 
    }
    console.log("this is the id after fetching"+this.singleJob.id);
    if(!this.c){
    this.technicianDataService.retrieveAllTechnicians(this.userType,this.userId).subscribe(
      data=>{this.technicians=data
        console.log(data);
       
      }
    )}
    
  }


  
saveJob(){
  
  
   
  
    if(this.id==-1){
     
    console.log(this.singleJob.locality);
      this.jobService.createJob(this.userId,this.singleJob).subscribe(
        data=>{
          console.log(`job data${data}`)
        //  this.router.navigate(['jobs',this.userType,this.userId]);
          this.router.navigate(['jobs',this.userType,this.userId,this.userLocality])
  
        }
      )
      }
    else{
      if(!this.c){
        this.singleJob.technicianId=this.singleTechie.id;
  this.singleJob.technicianDetails=this.singleTechie.name;
    console.log("id of technician" +this.singleTechie.id);
    this.jobService.updateJob(this.userType,this.userId,this.id,this.singleJob,this.singleJob.technicianId).subscribe(
      data=>{
        console.log(data)
        this.router.navigate(['jobs',this.userType,this.userId,this.singleJob.locality]);

        }
    )
    }}}


    gotoTechnicianPage()
    {
      this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
    }
  goToJobs()
    {
      this.router.navigate(['jobs',this.userType,this.userId,this.userLocality])
    }
  
    about()
  {
    this.router.navigate(['about','techJob']);
  }
// searchByDepartment() {
  //   this.technicianDataService.findByDepartment(this.department)
  //     .subscribe(
  //       data => {
  //        this.technicians=data;
  //       console.log(data);
          
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
 

}


