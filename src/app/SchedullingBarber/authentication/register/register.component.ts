import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../service/AuthService.service'
import { Barber } from '../../model/barber.model'
import { Client } from '../../model/client.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  selectedOptionForForm: string
  phoneNumber: string
  barber: Barber = new Barber()
  client: Client = new Client()

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.selectedOptionForForm = '1'
  }

  public register() {
    if (this.selectedOptionForForm == '1') {
    } else {
    }
  }

  formatPhoneNumber(): void {
    let formattedValue = this.phoneNumber.replace(/\D/g, '') // Remove caracteres não numéricos

    if (formattedValue.length > 9) {
      formattedValue = `${formattedValue.substring(0, 7)}-${formattedValue.substring(7)}`
    }

    if (formattedValue.length > 2) {
      formattedValue = `(${formattedValue.substring(0, 2)}) ${formattedValue.substring(2)}`
    }

    this.phoneNumber = formattedValue
  }

  getNumbersOnly(value: string): string {
    console.log(value.replace(/\D/g, ''))
    // Remove caracteres não numéricos
    return value.replace(/\D/g, '')
  }
}
