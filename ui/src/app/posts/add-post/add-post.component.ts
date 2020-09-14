import { Component, OnInit } from '@angular/core';
import { IPost, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  addPost() {
    const post: IPost = {
      id: 101,
      title: 'A new Post!',
      slug: 'A new Post',
      body: 'This will add a new Post',
      username: 'mrbig',
      name: 'Chandler Bing',
    };
    this.postService.addPost(post);
  }
}
