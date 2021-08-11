import { Component, OnInit } from '@angular/core';
import { JobDataService } from '../service/data/job-data.service';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class jobb{
  constructor(
    public id:number,
    public jobName: String,
    public address: String,
    public issue: String,
    public status: boolean,
    public showDetails: String,
    public duration: string,
    public image: string,
    public locality: string,
    public charges: number,
    public partsRepaired: string,
    public partsAdded: string,
    public warrentyIncreased: string,
    public note: string,
    public technicianDetails:string,
     public technicianId:number
    
    ){

  }
}
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})

export class JobComponent implements OnInit {
 
  jobs: jobb[]
  message:String
  userType:string
 userLocality:string
 email:string
 SingleJob:jobb;
 technicianId=-1;
 selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
 c:boolean;
  imageName: any;
  userId:number
  technicianAssigned:Boolean
  constructor(private jobService: JobDataService,private router: Router,private route: ActivatedRoute,private httpClient: HttpClient) { }
 
  ngOnInit() {
 this.userType=this.route.snapshot.params['userType'];
 this.userId=this.route.snapshot.params['userId'];

 console.log(this.userId)
 
 if(this.userType==="Customer")
 this.c=true;
 else
 this.c=false;
 
  this.userLocality=this.route.snapshot.params['userLocality'];
  console.log(this.userLocality);
  this.SingleJob=new jobb(-1,'','','',false,'','','','',-1,'','','','','Not Assigned',-1);
 this.email=sessionStorage.getItem('user');
 console.log(this.email);
    
      this.refreshJob();
    
 //   })
   
  }
  refreshJob(){
   
    
      this.jobService.retrieveAllJobs(this.userType,this.userId,this.userLocality).subscribe(
      response=>{
        
        this.jobs=response;})
       
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

  updateJob(id)
 {
    this.router.navigate(['job',this.userType,this.userId,this.userLocality,'jobId',id])
  }
  
  addJob(){

    this.router.navigate(['job',this.userType,this.userId,this.userLocality,'jobId',-1])
  }

  gotoTechnicianPage()
  {
    this.router.navigate(['technicians',this.userType,this.userId,this.userLocality]);
  }
  goToJobs()
  {
    this.router.navigate(['jobs',this.userType,this.userId,this.userLocality])
  }

  timer(id)
  {
    this.router.navigate(['timer']);
  }
//   getImage(id) {
//     //Make a call to Sprinf Boot to get the Image Bytes.
//     console.log("image id"+id)
//     if(id!=-1){
//       this.jobService.retrieveJob(this.userType,id).subscribe(
//         data=> this.SingleJob = data

//       )}
//       console.log(this.SingleJob);
//       this.httpClient.get('http://localhost:8080/image/get/' + this.SingleJob.image)
//       .subscribe(
//         res => {
//           this.retrieveResonse = res;
//           console.log(res);
//           this.base64Data = this.retrieveResonse.picByte;
//           this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
//           console.log(this.retrievedImage);
//         }
       
//       );
  
// }

view(imageName)
{
  this.router.navigate(['viewImage',imageName,this.userType,this.userLocality,this.userId]);
}

getImage(imageName) {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8080/image/get/' + imageName)
    .subscribe(
      res => {
        this.retrieveResonse = res;
        console.log(res);
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        console.log(this.retrievedImage);
      }
     
    );
}
about()
  {
    this.router.navigate(['about','techJob']);
  }
  show(id){
    this.router.navigate(['viewDetails',this.userType,this.userId,this.userLocality,'jobId',id]);
  }
}
