import { Component, OnInit } from '@angular/core';
import { JobDataService } from '../service/data/job-data.service';
import { jobb } from '../job/job.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-technician',
  templateUrl: './jobs-technician.component.html',
  styleUrls: ['./jobs-technician.component.css']
})
export class JobsTechnicianComponent implements OnInit {

  jobs: jobb[]
  message:String
  userType:string
 userId:number
 email:string
 Admin:Boolean
 technicianId=-1
  constructor(private jobService: JobDataService,private router: Router,private route: ActivatedRoute) { }
 
  ngOnInit() {
 this.userType=this.route.snapshot.params['userType'];
 
  this.userId=this.route.snapshot.params['userId'];
 
 this.email=sessionStorage.getItem('user');
 console.log(this.email);

      this.refreshJob();
    
 //   })
   
  }
  refreshJob(){
   
   
    {  this.jobService.retrieveAllJobsByTechnician(this.userType,this.userId).subscribe(
      response=>{
        
        this.jobs=response;})}
     
       
  }


  deleteJob(id){
  console.log(`${id}`);
  this.jobService.deleteJob(this.userType,id).subscribe(
    response=>{
      console.log(response);
      this.message=`Deletion of Job ${id} successful!`;
      this.refreshJob();
    }
  )
  }

addDetails(id)
{
 this.router.navigate(['jobDetails',this.userType,this.userId,'jobId',id])
}
  updateJob(id)
 {
    this.router.navigate(['job',this.userType,this.userId,'jobId',id])
  }
  
  addJob(){

    this.router.navigate(['job',this.userType,this.userId,'jobId',-1])
  }

  gotoTechnicianPage()
  {
    this.router.navigate(['technicians',this.userType,this.userId]);
  }
  goToJobs()
  {
    this.router.navigate(['jobs',this.userType,this.userId])
  }

  sRoute(){
this.router.navigate(['maps']);
  }
  
  sendMail()
  {
    this.router.navigate(['mail',this.userType,this.userId])
  }
  about()
  {
    this.router.navigate(['about','techJob']);
  }

}
