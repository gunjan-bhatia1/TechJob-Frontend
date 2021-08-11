import { Injectable } from '@angular/core';
import { Technician } from 'src/app/technician/technician.component';
import {HttpClient} from '@angular/common/http';
const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TechnicianDataService {
 

  constructor(private http:HttpClient) { }

  retrieveAllTechnicians(userType,user_id){
console.log("hi");
    return this.http.get<Technician[]>(`http://localhost:8080/users/${userType}/allTechnicians/${user_id}`)

  }
  
  deleteTechnician(userType,id)
  {
    return this.http.delete(`http://localhost:8080/users/${userType}/deleteTechnician/${id}`);
  }

  retrieveTechnician(userType,id)
  {
    return this.http.get<Technician>(`http://localhost:8080/users/${userType}/Technician/${id}`);
  }

  updateTechnician(userType,user_id,id,technician)
  {
    
    return this.http.put(`http://localhost:8080/users/${userType}/${user_id}/updateTechnician/${id}`,technician);
  }

  createTechnician(user_id,technician)
  {
    console.log(user_id);
    console.log(technician.department);
    return this.http.post(`http://localhost:8080/users/newTechnician/${user_id}`,technician);
  }

  // findByDepartment(department) {
  //   return this.http.get(`http://localhost:8080/${department}/technicians`);
  // }
  
}