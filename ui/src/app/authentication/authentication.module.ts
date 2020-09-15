import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent, LandingPageComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoginComponent, RegisterComponent, ChangePasswordComponent],
})
export class AuthenticationModule {}
