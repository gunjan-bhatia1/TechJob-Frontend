import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { jobb } from '../job/job.component';
import { JobDataService } from '../service/data/job-data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  @ViewChild('content') content:ElementRef;

userId:number
userType:string
singleJob:jobb
userLocality:string
email:string
id:number
c:boolean

  constructor(private jobService: JobDataService,private router: Router,private route: ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.userType=this.route.snapshot.params['userType'];
 this.userId=this.route.snapshot.params['userId'];
 this.userLocality=this.route.snapshot.params['userLocality'];
 this.id=this.route.snapshot.params['id'];
 console.log(this.id);
//console.log(this.userLocality);
  this.singleJob=new jobb(-1,'','','',false,'','','','',-1,'','','','','Not Assigned',-1);
 this.email=sessionStorage.getItem('user');
 if(this.userType==="Customer")
 this.c=true;
 else
 this.c=false;
 if(this.id!=-1){
  this.jobService.retrieveJob(this.userType,this.id).subscribe(
    data=>{ this.singleJob = data
      
  }) 
  }
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
  
  public downloadPDF():void {

    let doc=new jsPDF();
    let specialElementHandlers = {
        '#editor':function(element,renderer){
        return true;
      }
    };
    
    let content =this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15,{
     'width' : 190,
     'elementHandlers' : specialElementHandlers

    });
    doc.save('detalis.pdf');
        }

        
  }


