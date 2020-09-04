import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { PostModule } from './posts/post/post.module';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [AppComponent, PostsComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    CommonComponentsModule,
    PostModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
