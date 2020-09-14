import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: IPost = {
    id: 101,
    title: 'Must-eat places in Istanbul with vegan options too!',
    slug: 'Food has always been a serious business in Istanbul',
    body:
      'Food has always been a serious business in Istanbul. Every single day, the locals go for their daily jobs, carrying a sesame-crusted simit in one hand or spending a few minutes wiping down that creamy menemen with a piece of bread. The origins of the true Turkish cuisine began in the palace kitchens of the sultans where the most commonly cooked food was grilled lamb. The recipes were expanded with the introduction of meze platter along with various other meats and baked items. If you travel back in history, know that the first order of business for the Ottoman government in the Middle Ages was the provisioning of wheat for the city of Istanbul.',
    username: 'smelly-cat',
    name: 'Pheobe Buffay',
  };
  userComments = [
    { name: 'Chandler', comment: 'Blah Blah Blah' },
    { name: 'Rachel', comment: 'Awesome Post' },
    { name: 'Ross', comment: 'We were on a date!' },
    { name: 'Joey', comment: "How you doin'" },
  ];
  constructor() {}

  ngOnInit() {}
  addComment(comment: HTMLInputElement) {
    console.log('inside add comment');
    this.userComments.push({
      name: 'unknown',
      comment: comment.value,
    });
    console.log(comment.value);
  }
}
