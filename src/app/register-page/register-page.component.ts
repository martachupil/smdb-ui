import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  error: string = null;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email:  new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      name:  new FormControl(null, Validators.required),
      password:  new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    });
  }

  async doRegister() {
    this.error = null;
    const val = this.registerForm.value as User;
    try {
      const result = await this.auth.register(val).toPromise();
      //this.router.navigate(['/']);  

      console.log(result);
    } catch (err) {
      this.error = 'Failed to create user';
      console.error(err.error);
    }
  }
}
