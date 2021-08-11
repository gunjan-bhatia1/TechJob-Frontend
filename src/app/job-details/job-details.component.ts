import { Component, OnInit } from '@angular/core';
import { jobb } from '../job/job.component';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDataService } from '../service/data/job-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  SingleJob: jobb;
  id:number;
  userType: string;
  userId: number
  email: string
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  constructor( private jobService: JobDataService, private route:ActivatedRoute,private router: Router,private httpClient: HttpClient) { }
  

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.userType=this.route.snapshot.params['userType'];
    this.userId=this.route.snapshot.params['userId'];
    this.SingleJob=new jobb(this.id,'','','',false,'','','','',-1,'','','','','',-1); 
    this.email=sessionStorage.getItem('user');
    console.log(this.email);
    if(this.id!=-1){
    this.jobService.retrieveJob(this.userType,this.id).subscribe(
      data=> this.SingleJob = data
    )}
    console.log("this is the id after fetching"+this.SingleJob.id);

  }
  addDetails()
  {
    this.jobService.addDetails(this.SingleJob).subscribe(
      data=>{
        console.log(data)
       this.router.navigate(['technicianJobs',this.userType,this.userId]);
    })
  }
upload()
{
  this.router.navigate(['image'])
}

public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
}
//Gets called when the user clicks on submit to upload the image
onUpload() {
  console.log(this.selectedFile);
 
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  this.SingleJob.image=this.selectedFile.name;
  console.log(this.SingleJob.image);
  //Make a call to the Spring Boot Application to save the image
  this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
       
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
}
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
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
}
