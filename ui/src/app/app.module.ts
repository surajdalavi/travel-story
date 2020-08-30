import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    // BrowserAnimationsModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
