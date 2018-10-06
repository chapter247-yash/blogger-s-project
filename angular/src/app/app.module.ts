import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
    

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule} from "@angular/forms";

import 'hammerjs';



import { AppComponent } from './app.component';
import { NavComponent } from './main/nav/nav.component';
import { FooterComponent } from './main/footer/footer.component';
import { ContactComponent } from './main/contact/contact.component';;
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { HomeComponent } from './main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
