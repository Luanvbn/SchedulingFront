import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './SchedullingBarber/authentication/authentication.component'
import { AuthGuard } from './SchedullingBarber/authentication/guard/auth-guard.guard'
import { LoginComponent } from './SchedullingBarber/authentication/login/login.component'
import { RegisterComponent } from './SchedullingBarber/authentication/register/register.component'
import { BarberComponent } from './SchedullingBarber/Components/barber/barber.component'
import { ClientComponent } from './SchedullingBarber/Components/client/client.component'
import { AdminComponent } from './SchedullingBarber/Components/admin/admin.component'

const routes: Routes = [
  { path: 'barber', component: BarberComponent, canActivate: [AuthGuard] },
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
