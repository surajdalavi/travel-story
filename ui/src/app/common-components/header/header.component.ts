import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPostComponent } from 'src/app/posts/add-post/add-post.component';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  private authListenerSubs: Subscription;
  constructor(private router: Router, public dialog: MatDialog,
    private userService:UserService) {}
  showFiller = false;
  
  navigateToProfilePage() {
    this.router.navigateByUrl('/profile', { state: { to: 'profile' } });
  }
  navigateToHomePage() {
    this.router.navigateByUrl('/home-page', { state: { to: 'home' } });
  }
  addPost() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    this.dialog.open(AddPostComponent, dialogConfig);
  }
  logout() {
    this.userService.logout();
  }

  ngOnInit() {
    this.isAuthenticated = this.userService.getIsAuthenticated();
    console.log(this.isAuthenticated);
    this.authListenerSubs = this.userService
      .getAuthStatusListner()
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        console.log(this.isAuthenticated);
      });
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
