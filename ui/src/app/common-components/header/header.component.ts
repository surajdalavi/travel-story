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
  constructor(private router: Router, public dialog: MatDialog) {}
  showFiller = false;
  ngOnInit() {}
  navigateToProfilePage() {
    this.router.navigateByUrl('/profile', { state: { to: 'profile' } });
  }
  navigateToHomePage() {
    this.router.navigateByUrl('/home-page', { state: { to: 'home' } });
  }
  addPost() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '900px';
    dialogConfig.height = '600px';
    this.dialog.open(AddPostComponent, dialogConfig);
  }
}
