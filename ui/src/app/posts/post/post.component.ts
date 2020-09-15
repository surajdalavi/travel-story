import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: IPost;
  userComments = [
    { name: 'Chandler', comment: 'Blah Blah Blah' },
    { name: 'Rachel', comment: 'Awesome Post' },
    { name: 'Ross', comment: 'We were on a date!' },
    { name: 'Joey', comment: "How you doin'" },
  ];
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.post = this.postService.getPost(params.id);
    });
  }
  addComment(comment: HTMLInputElement) {
    console.log('inside add comment');
    this.userComments.push({
      name: 'unknown',
      comment: comment.value,
    });
    console.log(comment.value);
  }
}
