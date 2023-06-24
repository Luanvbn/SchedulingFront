import { AuthService } from './../../service/AuthService.service'
import { AuthenticationRequest } from '../../model/AuthenticationRequest.model'
import { Client } from '../../model/client.model'

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authRequest: AuthenticationRequest = new AuthenticationRequest()
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public login() {
    this.authService.login(this.authRequest).subscribe((result) => {
      if (result) {
        console.log(result)
        this.router.navigate([''])
      }
    })
  }
}
