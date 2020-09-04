import { Injectable } from "@angular/core";

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
  providedIn: "root",
})
export class UserService {
  users: IUser[] = [
    {
      id: generateId(),
      name: "Phoebe Buffay",
      email: "phoebe@gmail.com",
      password: "phoebe123",
      username: "smelly-cat",
      profilePic: "../../assets/user/phoebe.jpg",
    },
    {
      id: generateId(),
      name: "Chandler Bing",
      email: "bing@gmail.com",
      password: "chandler123",
      username: "mrbig",
      profilePic: "../../assets/user/chandler.jpg",
    },
  ];
  constructor() {}
  getUserDetails(username): IUser {
    return this.users.find((e) => e.username === username);
  }
}
