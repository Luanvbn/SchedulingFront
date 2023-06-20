import { AuthenticationRequest } from '../../model/AuthenticationRequest.model'
import { LoginService } from './../../service/login-service.service'
import { Component } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authRequest: AuthenticationRequest = new AuthenticationRequest()
  constructor(private loginService: LoginService) {}

  public login() {
    this.loginService.login(this.authRequest)
  }
}
