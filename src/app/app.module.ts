import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from "./components/signup/signup.component";
import { AdvertisementComponent } from "./components/advertisement/advertisement.component";
import { ContactUsComponent } from "./components/contactUs/contactUs.component";
import { PostAdComponent } from "./components/postAd/postAd.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpModule } from "@angular/http";


@NgModule({
  imports:      [ BrowserModule, FormsModule,
                  RouterModule.forRoot([
                        {path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'advertisement', component: AdvertisementComponent},
                        {path: 'contactUs', component: ContactUsComponent},
                        {path: 'login', component: LoginComponent},
                        {path: 'signup', component: SignupComponent},
                        {path: 'postAd', component: PostAdComponent}
                    ]),
                    HttpModule
                ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, LoginComponent , SignupComponent, AdvertisementComponent, ContactUsComponent, PostAdComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
