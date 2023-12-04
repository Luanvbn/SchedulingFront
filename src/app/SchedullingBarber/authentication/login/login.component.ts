import { AuthService } from '../../service/auth/AuthService.service'
import { AuthenticationRequest } from '../../model/AuthenticationRequest.model'
import { Client } from '../../model/client.model'

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authRequest: AuthenticationRequest = new AuthenticationRequest()
  loginForm: FormGroup
  errorResponse: string | null
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin()
  }

  formLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    })
  }

  public login() {
    if (this.loginForm.valid) {
      this.authRequest = this.loginForm.value
      this.authService.login(this.authRequest).subscribe(
        (result) => {
          if (result) {
            console.log(result)
            switch (this.authService.whatAuthority()) {
              case 'ROLE_ADMIN': {
                this.router.navigate(['admin'])
                break
              }
              case 'ROLE_BARBER': {
                this.router.navigate(['barber'])
                break
              }
              case 'ROLE_CLIENT': {
                this.router.navigate(['client'])
                break
              }
            }
          }
        },
        (error) => {
          this.errorResponse = 'Login ou senha incorreta!'
        }
      )
    }
  }
}
