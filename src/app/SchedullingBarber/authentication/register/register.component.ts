import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../service/AuthService.service'
import { Barber } from '../../model/barber.model'
import { Client } from '../../model/client.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
  registerForm: FormGroup

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.selectedOptionForForm = '1'
    this.formRegister()
  }

  formRegister() {
    if (this.selectedOptionForForm === '1') {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        sex: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        birthday: ['', Validators.required],
        access_email: ['', [Validators.required, Validators.email]],
        access_password: ['', Validators.required],
      })
    } else {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        sex: ['', Validators.required],
        birthday: ['', Validators.required],
        access_email: ['', [Validators.required, Validators.email]],
        access_password: ['', Validators.required],
      })
    }
  }
  public register() {
    if (this.selectedOptionForForm == '1') {
      console.log(this.registerForm)
    } else {
    }
  }
}
