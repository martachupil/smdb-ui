import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { User, Credentials } from '../models/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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
  
  currentUser(): Observable<User> {
    return new Observable(o => {
      o.next({
        email: 'user@mail.com',
        name: 'john doe'
      });
    });
  }

  isLoggedIn() {   
    return false;  
  } 
}


