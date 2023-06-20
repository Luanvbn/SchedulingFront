import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'

import { HomeComponent } from './SchedullingBarber/Components/home/home.component'
import { AuthModule } from './SchedullingBarber/authentication/auth.module'
import { HttpClientModule } from '@angular/common/http' /* Requisições Ajax */

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
