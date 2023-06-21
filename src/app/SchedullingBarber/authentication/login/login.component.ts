import { AuthenticationRequest } from '../../model/AuthenticationRequest.model'
import { Client } from '../../model/client.model'
import { LoginService } from './../../service/login-service.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authRequest: AuthenticationRequest = new AuthenticationRequest()
  client: Client
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.getClient
  }

  public login() {
    this.loginService.login(this.authRequest)
  }

  public getClient() {
    this.loginService.client().subscribe((client: Client) => {
      this.client = client
      console.log(this.client)
      // Qualquer outro código que dependa do valor do cliente deve ser colocado aqui
    })
  }
}
