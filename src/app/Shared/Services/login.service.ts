import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'https://localhost:44356/api';
  constructor(private httpClient:HttpClient) { }
  
  login(username: string, password: string): string {
    const url = `${this.baseURL}/user?username=${encodeURIComponent(username)}`;
    if(username == "gaganvk6@gmail.com" && password == "password123") {
      return "user";
    }
    else if(username == "lawyer@gmail.com" && password == "lawyer123") {
      return "lawyer";
    }
    else {
      return "null";
    }
  }
  
  
}
