import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPostComponent } from 'src/app/posts/add-post/add-post.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {}
  navigateToProfilePage() {
    this.router.navigateByUrl('/profile', { state: { to: 'profile' } });
  }
  navigateToHomePage() {
    this.router.navigateByUrl('/home-page', { state: { to: 'home' } });
  }
  addPost() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddPostComponent);
  }
}
