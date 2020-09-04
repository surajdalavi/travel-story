import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToProfilePage() {
    this.router.navigateByUrl('/profile', { state: { to: 'profile' } });
  }
  navigateToHomePage() {
    this.router.navigateByUrl('/home-page', { state: { to: 'home' } });
  }
}
