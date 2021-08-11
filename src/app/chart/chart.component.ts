import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../service/chart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var google: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
    // template: `<div #pieChart style="width: 100vw; height: 100vh;"></div>`
 
})
export class ChartComponent implements OnInit {
id:number
dataset:any
email:string
userType:string
userId:string
userLocality:string
constructor(private chartService: ChartService,private router: Router,private route: ActivatedRoute, private httpClient: HttpClient) { }
 
  @ViewChild('pieChart') pieChart: ElementRef
 
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.chartService.reportData(this.id).subscribe(
      response=>{
        console.log(response);
        this.dataset=response;}
        
        )
        this.userType=this.route.snapshot.params['userType'];
        this.userId=this.route.snapshot.params['userId'];
       this.email=sessionStorage.getItem('user');
       this.userLocality=this.route.snapshot.params['userLocality'];
  }

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart = () => {
 
var data = google.visualization.arrayToDataTable(this.dataset);

  const options = {
    title: 'Performance',
    legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
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

