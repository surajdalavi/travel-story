import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TrendingComponent } from "./trending/trending.component";
import { ToFollowComponent } from "./to-follow/to-follow.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    ToFollowComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    ToFollowComponent,
  ],
})
export class CommonComponentsModule {}
