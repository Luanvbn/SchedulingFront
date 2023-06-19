import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/components/account/authentication/authentication.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/components/account/login/login.component';
import { RegisterComponent } from './authentication/components/account/register/register.component';
import { AuthGuard } from './authentication/guard/auth.guard';
import { HomeComponent } from './SchedullingBarber/Components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
