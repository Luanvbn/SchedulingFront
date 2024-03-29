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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  aplicaCSS(campo) {
    const result = { 'border-red-600': this.validTouched(campo) }
    return result
  }

  validTouched(campo: any) {
    const result = !this.loginForm.get(campo).valid && this.loginForm.get(campo).touched
    return result
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
          const tempoAtraso: number = 3000
          setTimeout(() => {
            this.errorResponse = null
          }, tempoAtraso)
        }
      )
    }
  }
}
