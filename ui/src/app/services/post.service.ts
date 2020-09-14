import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IPost {
  id: number;
  title: string;
  slug: string;
  body: string;
  photos?: string;
  username: string;
  name: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: IPost[] = [
    {
      id: generateId(),
      title: 'Must-eat places in Istanbul with vegan options too!',
      slug: 'Food has always been a serious business in Istanbul',
      body:
        'Food has always been a serious business in Istanbul. Every single day, the locals go for their daily jobs, carrying a sesame-crusted simit in one hand or spending a few minutes wiping down that creamy menemen with a piece of bread. The origins of the true Turkish cuisine began in the palace kitchens of the sultans where the most commonly cooked food was grilled lamb. The recipes were expanded with the introduction of meze platter along with various other meats and baked items. If you travel back in history, know that the first order of business for the Ottoman government in the Middle Ages was the provisioning of wheat for the city of Istanbul.',
      username: 'smelly-cat',
      name: 'Pheobe Buffay',
    },
    {
      id: generateId(),
      title: 'Must-eat places in Istanbul with vegan options too!',
      slug: 'Food has always been a serious business in Istanbul',
      body:
        'Food has always been a serious business in Istanbul. Every single day, the locals go for their daily jobs, carrying a sesame-crusted simit in one hand or spending a few minutes wiping down that creamy menemen with a piece of bread. The origins of the true Turkish cuisine began in the palace kitchens of the sultans where the most commonly cooked food was grilled lamb. The recipes were expanded with the introduction of meze platter along with various other meats and baked items. If you travel back in history, know that the first order of business for the Ottoman government in the Middle Ages was the provisioning of wheat for the city of Istanbul.',
      username: 'smelly-cat',
      name: 'Pheobe Buffay',
    },
    {
      id: generateId(),
      title: 'Must-eat places in Istanbul with vegan options too!',
      slug: 'Food has always been a serious business in Istanbul',
      body:
        'Food has always been a serious business in Istanbul. Every single day, the locals go for their daily jobs, carrying a sesame-crusted simit in one hand or spending a few minutes wiping down that creamy menemen with a piece of bread. The origins of the true Turkish cuisine began in the palace kitchens of the sultans where the most commonly cooked food was grilled lamb. The recipes were expanded with the introduction of meze platter along with various other meats and baked items. If you travel back in history, know that the first order of business for the Ottoman government in the Middle Ages was the provisioning of wheat for the city of Istanbul.',
      username: 'smelly-cat',
      name: 'Pheobe Buffay',
    },
  ];
  post$ = new BehaviorSubject<IPost[]>(this.post);
  constructor() {}
  addPost(post) {
    console.log(post);
    this.post.push(post);
  }
}
