import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { AppRoutingModule } from './app-routing.module'

import { AuthModule } from './SchedullingBarber/authentication/auth.module'
import { HttpClientModule } from '@angular/common/http'
import { BarberComponent } from './SchedullingBarber/Components/barber/barber.component'
import { ClientComponent } from './SchedullingBarber/Components/client/client.component'
import { AdminComponent } from './SchedullingBarber/Components/admin/admin.component'
import { SidenavComponent } from './SchedullingBarber/Components/sidenav/sidenav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgendamentoComponent } from './SchedullingBarber/Components/agendamento/agendamento.component'; /* Requisições Ajax */
import { CardWithValuesComponent } from './SchedullingBarber/Components/cards/cardWithValues/cardWithValues.component';
import { CardDayViewComponent } from './SchedullingBarber/Components/cards/card-day-view/card-day-view.component';

@NgModule({
  declarations: [AppComponent, BarberComponent, ClientComponent, AdminComponent, SidenavComponent, AgendamentoComponent, CardWithValuesComponent, CardDayViewComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule, BrowserAnimationsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
