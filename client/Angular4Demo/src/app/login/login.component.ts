import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

import { CustomValidator } from '../validators/custom.validator';
import { Toastr } from '../toastr/toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  btnDisabled = false;
  public loginForm: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private data: DataService,
    private rest: RestApiService,

    private toastr: Toastr,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        CustomValidator.minlength(6)
      ]],
    });
  }

  _onSubmit() {
    console.log(855);

    this.submitted = true;
    if (!this.loginForm.valid) {
      this.toastr.showError("Please enter valid values!");
      return;
    }

    this.login(this.loginForm.value);

  }

  // validate() {
  //   if (this.email) {
  //     if (this.password) {
  //       return true;
  //     } else {
  //       this.data.error('Password is not entered');
  //     }
  //   } else {
  //     this.data.error('Email is not entered.');
  //   }
  // }

  gotoRegister(){
    this.router.navigate(['/register']);
  }

  async login(loginFormValue: any) {
    this.btnDisabled = true;
    try {
      // if (this.validate()) {
      const data = await this.rest.post(
        'http://localhost:3030/api/accounts/login',
        {
          email: loginFormValue.email,
          password: loginFormValue.password,
        },
      );
      if (data['success']) {
        localStorage.setItem('token', data['token']);
        this.router.navigate(['/']);
      } else {
        this.data.error(data['message']);
      }
      // }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
 
}
