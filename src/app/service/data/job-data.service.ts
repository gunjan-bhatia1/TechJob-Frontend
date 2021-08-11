import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { jobb } from 'src/app/job/job.component';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private http:HttpClient) { }
  retrieveAllJobs(userType,user_id,locality){
   
    if(userType==="Customer")
    return this.http.get<jobb[]>(`http://localhost:8080/users/${userType}/allJobsUnderCustomer/${user_id}`)
    else
    return this.http.get<jobb[]>(`http://localhost:8080/users/${userType}/allJobsByLocality/${locality}`)
    }

  retrieveAllJobsByTechnician(userType,user_id){
    return this.http.get<jobb[]>(`http://localhost:8080/users/${userType}/allJobsUnderTechnician/${user_id}`)

  }
  
  retrieveJob(userType,id)
  {
    console.log("ho");
    return this.http.get<jobb>(`http://localhost:8080/users/${userType}/Job/${id}`);
  }
  
  deleteJob(userType,id)
  {
    return this.http.delete(`http://localhost:8080/users/${userType}/deleteJob/${id}`);
  }

  updateJob(userType,user_id,id,job,technician_id)
  {
    
    return this.http.put(`http://localhost:8080/users/${userType}/${user_id}/updateJob/${id}/${technician_id}`,job);
  }

    createJob(user_id,job)
  {
   
    return this.http.post(`http://localhost:8080/users/newJob/${user_id}`,job);
  }

  addDetails(job)
  {
    return this.http.put(`http://localhost:8080/addDetails`,job);
 
  }
  

  
}
