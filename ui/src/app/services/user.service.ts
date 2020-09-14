import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  username: string;
  profilePic: string;
  mobileNo?: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [
    {
      id: generateId(),
      name: 'Phoebe Buffay',
      email: 'phoebe@gmail.com',
      password: 'phoebe123',
      username: 'smelly-cat',
      profilePic: '../../assets/user/phoebe.jpg',
    },
    {
      id: generateId(),
      name: 'Chandler Bing',
      email: 'bing@gmail.com',
      password: 'chandler123',
      username: 'mrbig',
      profilePic: '../../assets/user/chandler.jpeg',
    },
    {
      id: generateId(),
      name: 'Tori Vega',
      email: 'tori@gmail.com',
      password: 'vega123',
      username: 'makeitshine',
      profilePic: '../../assets/user/1.jpg',
    },
  ];
  constructor() {}
  getUserDetails(username): IUser {
    return this.users.find((e) => e.username === username);
  }
  getName(username): String {
    let user = this.users.find((e) => e.username === username);
    return user.name;
  }
  getProfilePic(username): String {
    let user = this.users.find((e) => e.username === username);
    return user.profilePic;
  }
}
