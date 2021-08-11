import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName:string
  userId:number
  userLocality:string
  userType:string
  email:string
  constructor(private httpClient: HttpClient,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imageName=this.route.snapshot.params['imageName'];
    this.email=sessionStorage.getItem('user');
    this.userType=this.route.snapshot.params['userType'];
 this.userId=this.route.snapshot.params['userId'];
 this.userLocality=this.route.snapshot.params['userLocality'];
 console.log(this.userLocality);
 console.log(this.userId);
 console.log(this.userType);
  }
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

}
