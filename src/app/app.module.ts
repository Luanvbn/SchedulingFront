import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/components/account/authentication/authentication.component';
import { RegisterComponent } from './authentication/components/account/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/components/account/login/login.component';
import { HomeComponent } from './SchedullingBarber/Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
