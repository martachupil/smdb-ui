import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Credentials } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  loginForm: FormGroup;
  error: string = null;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email:  new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      password:  new FormControl(null, Validators.required)
    });
  }

  async doLogin() {
    this.error = null;
    const val = this.loginForm.value as Credentials;
    try {
      const result = await this.auth.login(val).toPromise();
      // this.router.navigate(['/']);  
      console.log('login OK', result);
    } catch (err) {
      this.error = err.error.message || 'Bad email or password';
      console.error(err.error);
    }
  } 

}
