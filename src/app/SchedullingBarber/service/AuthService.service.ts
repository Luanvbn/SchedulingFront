import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { AuthenticationRequest } from '../model/AuthenticationRequest.model'
import { tap } from 'rxjs'

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
        console.log(response.token)
      })
    )
  }

  logout(): void {
    this.loggedIn = false
    localStorage.removeItem('token')
  }

  isAuthenticated(): boolean {
    return this.loggedIn || localStorage.getItem('token') !== null
  }
}
