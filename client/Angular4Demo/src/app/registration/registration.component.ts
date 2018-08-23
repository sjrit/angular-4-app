import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { CustomValidator } from '../validators/custom.validator';
import { Toastr } from '../toastr/toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  btnDisabled = false;

  public signUpForm: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private data: DataService,
    private rest: RestApiService,

    private toastr: Toastr,
    
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        CustomValidator.minlength(6)
      ]],
      password1: ['', [
        Validators.required,
        CustomValidator.minlength(6)
      ]],
    });
  }

  _onSubmit() {
    this.submitted = true;
    if (!this.signUpForm.valid) {
      this.toastr.showError("Please enter valid values!");
      return;
    }
    if (this.signUpForm.value.password != this.signUpForm.value.password1) {
      this.data.error('Passwords do not match.');
      this.toastr.showWarning('Passwords do not match.');
      return true;
    }
    this.register(this.signUpForm.value);

  }

  async register(signUpFormValue) {
    this.btnDisabled = true;
    try {
      const data = await this.rest.post(
        'http://localhost:3030/api/accounts/signup',
        {
          name: signUpFormValue.name,
          email: signUpFormValue.email,
          password: signUpFormValue.password,
        },
      );
      if (data['success']) {
        localStorage.setItem('token', data['token']);
        this.toastr.showSuccess('Registration successful!');
        this.router.navigate(['']);
      } else {
        this.data.error(data['message']);
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
