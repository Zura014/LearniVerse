import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    AboutUsComponent,
    CoursesComponent,
    CategoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }