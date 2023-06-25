import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'

import { HomeComponent } from './SchedullingBarber/Components/home/home.component'
import { AuthModule } from './SchedullingBarber/authentication/auth.module'
import { HttpClientModule } from '@angular/common/http';
import { BarberComponent } from './SchedullingBarber/Components/barber/barber.component';
import { ClientComponent } from './SchedullingBarber/Components/client/client.component';
import { AdminComponent } from './SchedullingBarber/Components/admin/admin.component' /* Requisições Ajax */

@NgModule({
  declarations: [AppComponent, HomeComponent, BarberComponent, ClientComponent, AdminComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
