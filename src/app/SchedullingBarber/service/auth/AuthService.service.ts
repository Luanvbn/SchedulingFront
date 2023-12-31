import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

import { tap } from 'rxjs'
import { AuthenticationRequest } from '../../model/AuthenticationRequest.model'
import jwtDecode from 'jwt-decode'
import { Barber } from '../../model/barber.model'
import { Client } from '../../model/client.model'
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false
  private apiUrl = environment.baseUrl

  constructor(private http: HttpClient) {}

  login(authenticationRequest: AuthenticationRequest) {
    return this.http.post(this.apiUrl + '/auth/authenticate', authenticationRequest).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token)
        console.log(this.whatAuthority())
        console.log(response.token)
      })
    )
  }

  registerBarber(data: Barber) {
    return this.http.post(this.apiUrl + '/auth/registerBarber', data).pipe(
      tap((response: any) => {
        // Lide com a resposta do backend, se necessário
        console.log('Registro do Barber realizado com sucesso!')
        console.log(response)
      })
    )
  }

  registerClient(data: Client) {
    return this.http.post(this.apiUrl + '/auth/registerClient', data).pipe(
      tap((response: any) => {
        // Lide com a resposta do backend, se necessário
        console.log('Registro do Client realizado com sucesso!')
        console.log(response)
      })
    )
  }

  getToken() {
    return localStorage.getItem('token') as any
  }

  public decodePayloadJWT(): any {
    try {
      return jwtDecode(this.getToken())
    } catch (Error) {
      return null
    }
  }

  logout(): void {
    this.loggedIn = false
    localStorage.removeItem('token')
  }

  isAuthenticated(): boolean {
    return this.loggedIn || localStorage.getItem('token') !== null
  }

  whatAuthority() {
    const decodedToken = this.decodePayloadJWT()

    if (decodedToken && decodedToken.authorities && decodedToken.authorities.length > 0) {
      const authorities = decodedToken.authorities

      if (authorities.some((authority) => authority.authority === 'ROLE_ADMIN')) {
        return 'ROLE_ADMIN'
      } else if (authorities.some((authority) => authority.authority === 'ROLE_BARBER')) {
        return 'ROLE_BARBER'
      }
    }

    return 'ROLE_CLIENT'
  }
}
