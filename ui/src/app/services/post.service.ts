import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import posts from './data.json';

export interface IPost {
  id: number;
  title: string;
  slug: string;
  body: string[];
  photos?: string;
  username: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: IPost[] = posts;
  // Creating post observable
  post$ = new BehaviorSubject<IPost[]>(this.post);
  constructor() {}
  addPost(post) {
    console.log(post);
    this.post.push(post);
  }
  getPost(id) {
    const index = this.post.findIndex((b) => b.id === +id);
    return this.post[index];
  }
  getPostUser(username) {
    const index = this.post.findIndex((b) => b.username === username);
    return this.post[index];
  }
}
