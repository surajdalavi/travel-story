import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [LoginComponent, RegisterComponent, ChangePasswordComponent],
})
export class AuthenticationModule {}
