/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 // calculateAndDisplayRoute(directionsService:any, directionsRenderer:any):void{}
 email:String
  constructor(private router:Router) { 
    
  }
  //AIzaSyAfvMIe7xm7VNirdMAX4aSZ_aoR2Fs2RyY
  ngAfterViewInit(): void {
    // Load google maps script after view init
    const DSLScript = document.createElement('script');
   
   DSLScript.type = 'text/javascript';
    document.body.appendChild(DSLScript);
    document.body.removeChild(DSLScript);
  }
  ngOnInit(): void {
    this.email=sessionStorage.getItem('user');
    console.log("hi");
    var directionsService = new google.maps.DirectionsService;
    var directionsRenderer = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsRenderer.setMap(map);
    
    document.getElementById('submit').addEventListener('click', (e) => {
      console.log("hi");
      this. calculateAndDisplayRoute(e,directionsService, directionsRenderer);});
  }
  
  
 calculateAndDisplayRoute(e,directionsService, directionsRenderer): void{
   console.log("hi");
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    for (var i = 0; i < Object.keys(checkboxArray).length; i++) {
      if (checkboxArray[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true
        });
      }
    }
  
    directionsService.route({
      origin: (<HTMLInputElement>document.getElementById('start')).value,
      destination: (<HTMLInputElement>document.getElementById('end')).value,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        var route = response.routes[0];
        var summaryPanel = document.getElementById('directions-panel');
        summaryPanel.innerHTML = '';
        // For each route, display summary information.
        for (var i = 0; i < route.legs.length; i++) {
          var routeSegment = i + 1;
          summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
              '</b><br>';
          summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
          summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
          summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  about()
  {
    this.router.navigate(['about','techJob']);
  }
}



