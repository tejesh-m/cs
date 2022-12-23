import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchbooksComponent } from './Components/searchbooks/searchbooks.component';
import { CreatebooksComponent } from './Components/createbooks/createbooks.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAllBooksComponent } from './Components/get-all-books/get-all-books.component';
import { SigninComponent } from './Components/signin/signin.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbooksComponent,
    CreatebooksComponent,
    GetAllBooksComponent,
    SigninComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
