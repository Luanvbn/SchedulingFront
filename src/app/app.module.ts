import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'


import { AuthModule } from './SchedullingBarber/authentication/auth.module'
import { HttpClientModule } from '@angular/common/http';
import { BarberComponent } from './SchedullingBarber/Components/barber/barber.component';
import { ClientComponent } from './SchedullingBarber/Components/client/client.component';
import { AdminComponent } from './SchedullingBarber/Components/admin/admin.component'
import { SidenavComponent } from './SchedullingBarber/Components/sidenav/sidenav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' /* Requisições Ajax */

@NgModule({
  declarations: [AppComponent, BarberComponent, ClientComponent, AdminComponent, SidenavComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
