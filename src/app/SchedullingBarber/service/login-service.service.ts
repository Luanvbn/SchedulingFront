import { AppConstants } from './../app.constants'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AuthenticationRequest } from '../model/AuthenticationRequest.model'
import { Observable, map } from 'rxjs'
import { Client } from '../model/client.model'

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

  client(): Observable<Client> {
    return this.http.get(AppConstants.baseServer + '/client/name/Jose').pipe(
      map((dados: any) => {
        return dados as Client
      })
    )
  }
}
