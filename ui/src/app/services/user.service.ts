import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  username: string;
  profilePic: string;
  mobileNo?: string;
  followers?: string[];
  following?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  // Adding authentication to check if the user is logged in or not 
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

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
  // returning the value of isAuthenticated
  getIsAuthenticated() {
    return this.isAuthenticated;
  }
  // returning a listener
  getAuthStatusListner() {
    return this.authStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}
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
  login() {
    this.http.get('http://localhost:3000/api/login').subscribe((msg) => {
      console.log(msg);
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.router.navigateByUrl('/home-page', { state: { to: 'home' } });
    });
  }
  register(){
    const user = this.users[0];
    this.http.post('http://localhost:3000/user/register',user).subscribe((msg)=>{
      console.log(msg);
      this.router.navigate(['/search']);
    })
  }
  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/"]);
  }
}
