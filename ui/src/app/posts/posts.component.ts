import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, IPost } from '../services/post.service';
import { IUser, UserService } from '../services/user.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  post$: Observable<IPost[]> = this.postService.post$;
  coverPhoto = '../../assets/user/cover-photo.jpg';
  profilePhoto = '../../assets/user/phoebe.jpg';

  inputFileName: string;

  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef;

  flag: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    public userService: UserService
  ) {}
  trackById(index, item) {
    return item.id;
  }
  onFileSelected(event) {
    console.log('event::::::', event);
  }
  onClick(event) {
    if (this.fileUpload) this.fileUpload.nativeElement.click();
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(() => {
      const state = window.history.state;
      console.log(state.to);
      if (state.to === 'home') {
        this.flag = 'home';
      } else if (state.to === 'profile') {
        this.flag = 'profile';
      }
    });
  }
}
