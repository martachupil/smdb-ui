import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { User, Credentials } from '../models/user';
import { environment } from '../../environments/environment';

interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  login(credentials: Credentials) {   
    return this.http.post(`${environment.apiUrl}/users/login`, credentials);
  }
  
   logout() {   
    localStorage.removeItem('token');  
  }  
  
  isLoggedIn() {   
    return false;  
  } 
}


