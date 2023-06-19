import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'

import { HomeComponent } from './SchedullingBarber/Components/home/home.component'
import { AuthenticationComponent } from './SchedullingBarber/authentication/authentication.component'
import { LoginComponent } from './SchedullingBarber/authentication/login/login.component'
import { RegisterComponent } from './SchedullingBarber/authentication/register/register.component'

@NgModule({
  declarations: [AppComponent, AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
