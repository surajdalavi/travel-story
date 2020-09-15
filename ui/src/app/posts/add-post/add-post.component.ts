import { Component, OnInit } from '@angular/core';
import { IPost, PostService } from 'src/app/services/post.service';

function generateId() {
  return Math.floor(Math.random() * 1000);
}

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
      id: generateId(),
      title: 'My first Trek in 2020',
      slug: 'MyFirstTrekIn2020',
      body: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget purus ut elit facilisis consequat et malesuada lectus. In ullamcorper eleifend urna et iaculis. Ut consequat neque id dolor tincidunt, at tincidunt augue vestibulum. Nunc ac feugiat risus. Nullam nec malesuada magna, eget dignissim arcu. Aliquam erat volutpat. Nulla eu justo fringilla, luctus urna ut, viverra est. Sed et pulvinar quam, at bibendum nisi. Etiam dignissim lacinia sem eget mattis. Pellentesque sagittis rutrum feugiat. Proin blandit sapien non est auctor, id laoreet turpis rhoncus. Nullam porttitor turpis eget suscipit blandit. Quisque purus mauris, gravida at urna id, egestas consectetur sem.',
        'Ut facilisis tincidunt nisi nec lobortis. Vestibulum et tincidunt nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac quam tincidunt, aliquam magna eu, ullamcorper felis. Donec at pellentesque neque. Sed semper magna mi, vitae euismod libero aliquet sed. Suspendisse potenti. Aenean est ipsum, mollis sed tortor sed, tristique aliquet diam. Morbi fermentum eros et egestas dignissim. Donec enim sem, molestie ullamcorper orci viverra, pulvinar hendrerit neque. Phasellus semper risus varius cursus porta. Vivamus purus ex, fringilla mattis mollis eu, hendrerit aliquam ex. Nullam eu pellentesque neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nunc ultrices, mollis sapien ut, elementum erat. In cursus gravida turpis, lobortis feugiat ipsum.',
        'Curabitur consectetur orci et justo scelerisque fermentum. Maecenas ut orci suscipit, pharetra erat vel, maximus orci. Pellentesque a enim rutrum leo consectetur lobortis nec aliquet lorem. Phasellus tincidunt lorem eget porta scelerisque. Donec pellentesque cursus varius. Aliquam molestie sapien odio, in congue turpis lacinia at. Nunc interdum, dui vel rutrum tempor, orci ipsum dictum neque, a pharetra est lectus in purus.',
      ],
      username: 'mrbig',
      name: 'Chandler Bing',
      photos: '../../assets/posts/post2.jpeg',
    };
    this.postService.addPost(post);
  }
}
