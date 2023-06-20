import { AppConstants } from './../app.constants'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthenticationRequest } from '../model/AuthenticationRequest.model'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(authenticationRequest: AuthenticationRequest) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(authenticationRequest)).subscribe((data) => {
      /* Retorno HTTP */
      console.info(JSON.parse(JSON.stringify(data)))
    })
  }
}
