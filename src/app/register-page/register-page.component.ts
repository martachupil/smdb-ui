import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // registerUser(credentials) {  
    //   this.authService.login(credentials)  
    //     .subscribe(result => {   
    //       if (result)  
    //         this.router.navigate(['/']);  
    //       else    
    //         this.invalidLogin = true;   
    //     });  
    // } 
  }

}
