import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasForgottenPassword = false;
  hide = true;

  loginForm: FormGroup = this.formBuilder.group({
    email: [, { validators: [Validators.required], updateOn: 'change' }],
    password: [, { validators: [Validators.required], updateOn: 'change' }],
  });

  submitForm() {
    alert('done');
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
