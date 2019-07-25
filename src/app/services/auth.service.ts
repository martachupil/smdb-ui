import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {   
    return this.http.post('/users/login',   
       JSON.stringify(credentials));  
   }
  
   logout() {   
  }  
  
  isLoggedIn() {   
    return false;  
  } 
}


