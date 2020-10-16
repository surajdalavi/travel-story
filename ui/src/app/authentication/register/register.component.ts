import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService) { }
  signupForm = this.fb.group({
    Name : ['', Validators.required],
    UserName : ['',Validators.required],
    Email : ['',Validators.required],
    Password : ['',Validators.required],
    ConfirmPassword : ['',Validators.required]
  });

onSubmit(){
  
  console.log(this.signupForm.value);
  this.userService.register();
}

  ngOnInit() {
  }

}
