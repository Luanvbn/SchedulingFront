import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../service/auth/AuthService.service'
import { Barber } from '../../model/barber.model'
import { Client } from '../../model/client.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  phoneNumber: string
  barber: Barber = new Barber()
  client: Client = new Client()
  registerForm: FormGroup

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.barber)
    this.formRegister()
  }

  onOptionChange() {
    this.registerForm.reset() // Limpar o formulário
  }

  formRegister() {
      this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        sex: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', Validators.required],
        birthday: ['', Validators.required],
        typeUser: ['', Validators.required],
        access_email: ['', [Validators.required, Validators.email]],
        access_password: ['', Validators.required],
      })
  }
  public register() {
    if (this.registerForm.value.typeUser == 'Barber') {
      this.barber.name = this.registerForm.value.name
      this.barber.sex = this.registerForm.value.sex
      this.barber.phone = this.registerForm.value.phone
      this.barber.address = this.registerForm.value.address
      this.barber.birthday = this.registerForm.value.birthday
      this.barber.access = {
        email: this.registerForm.value.access_email,
        password: this.registerForm.value.access_password,
      }
      this.authService.registerBarber(this.barber).subscribe(
        (result) => {
          if (result) {
            console.log('Registro do Barber realizado com sucesso!')
          }
          // Limpar o formulário, se necessário
          this.onOptionChange();
        },
        (error) => {
          console.error('Erro ao realizar o registro do Barber:', error)
        }
      )
    } else {
      this.client.name = this.registerForm.value.name
      this.client.sex = this.registerForm.value.sex
      this.client.phone = this.registerForm.value.phone
      this.client.address = this.registerForm.value.address
      this.client.birthday = this.registerForm.value.birthday
      this.client.access = {
        email: this.registerForm.value.access_email,
        password: this.registerForm.value.access_password,
      }
      this.authService.registerClient(this.client).subscribe(
        (result) => {
          if (result) {
            console.log('Registro do Client realizado com sucesso!')
          } // Limpar o formulário, se necessário
          this.onOptionChange();
        },
        (error) => {
          // Lide com o erro de registro, se necessário
          console.error('Erro ao realizar o registro do Client:', error)
        }
      )
      console.log(this.client)
    }
  }
}
