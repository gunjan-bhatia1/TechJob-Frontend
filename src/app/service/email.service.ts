import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  sendMail(details,id){
    return this.http.post(`http://localhost:8080/technicianId/${id}/email`,details);
  }
}
