import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasForgottenPassword = false;
  hide = true;
  login = true;

  loginForm: FormGroup = this.formBuilder.group({
    email: [, { validators: [Validators.required], updateOn: 'change' }],
    password: [, { validators: [Validators.required], updateOn: 'change' }],
  });

  registerForm: FormGroup = this.formBuilder.group({
    name: [, { validators: [Validators.required], updateOn: 'change' }],
    email: [
      ,
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'change',
      },
    ],
    password: [, { validators: [Validators.required], updateOn: 'change' }],
    // cpassword: [, { validators: [Validators.required], updateOn: 'change' }],
    username: [, { validators: [Validators.required], updateOn: 'change' }],
  });

  submitForm() {
    alert('done');
    this.userService.login();
  }
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {}
}
