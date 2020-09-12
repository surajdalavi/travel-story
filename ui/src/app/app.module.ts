import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProfilePageComponent],
=======
import { PostsComponent } from './posts/posts.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { PostModule } from './posts/post/post.module';
import { SearchComponent } from './search/search.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SearchComponent,
    AddPostComponent,
  ],
>>>>>>> Stashed changes
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
<<<<<<< Updated upstream
=======
    AuthenticationModule,
    CommonComponentsModule,
    PostModule,
    FormsModule,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPostComponent],
})
export class AppModule {}
