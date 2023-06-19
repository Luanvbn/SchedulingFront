import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './SchedullingBarber/Components/home/home.component';
import { AuthenticationComponent } from './SchedullingBarber/authentication/authentication.component';
import { AuthGuard } from './SchedullingBarber/authentication/guard/auth-guard.guard';
import { LoginComponent } from './SchedullingBarber/authentication/login/login.component';
import { RegisterComponent } from './SchedullingBarber/authentication/register/register.component';

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
