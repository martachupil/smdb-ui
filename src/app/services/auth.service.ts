import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {   
    return this.http.post('/api/authenticate',   
    JSON.stringify(credentials))  
    .pipe(  
      map(response => {  
        const result = response._body;  
        if (result && result.token) {  
          // We wanna store it in localStorage  
          localStorage.setItem('token', result.token);  
          return true;  
        }  
        return false;  
      })  
    ); 
   }
  
   logout() {   
    localStorage.removeItem('token');  
  }  
  
  isLoggedIn() {   
    return false;  
  } 
}


