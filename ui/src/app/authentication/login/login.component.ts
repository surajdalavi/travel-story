import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasForgottenPassword = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  onLogin() {
    this.router.navigateByUrl('/home-page', { state: { to: 'home' } });
  }
}
