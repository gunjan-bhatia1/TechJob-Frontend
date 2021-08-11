import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { performance } from '../chart/chart.component';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

 reportData(id){
   // return this.http.get<Technician[]>(`http://localhost:8080/users/${userType}/allTechnicians/${user_id}`)
console.log("oye hoye");
 //console.log(this.http.get<any[]>(`http://localhost:8080/data/${id}`));
return this.http.get<any>(`http://localhost:8080/data/${id}`);
}
}
