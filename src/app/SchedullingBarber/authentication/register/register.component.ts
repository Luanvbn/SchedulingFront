import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../service/auth/AuthService.service'
import { Barber } from '../../model/barber.model'
import { Client } from '../../model/client.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Person } from '../../model/person.model'

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

  // Limpar o formulário
  onOptionChange() {
    this.registerForm.reset()
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

  ValidTouched(campo: any) {
    return !this.registerForm.get(campo).valid && this.registerForm.get(campo).touched
  }

  public register() {
    const person: Person = {
      name: this.registerForm.value.name,
      sex: this.registerForm.value.sex,
      phone: this.registerForm.value.phone,
      address: this.registerForm.value.address,
      birthday: this.registerForm.value.birthday,
      access: {
        email: this.registerForm.value.access_email,
        password: this.registerForm.value.access_password,
      },
      id: null,
    }

    if (this.registerForm.value.typeUser == 'Barber') {
      const barber: Barber = {
        ...person,
        servicos: [],
      }
      this.authService.registerBarber(barber).subscribe(
        (result) => console.log('Registro do Barber realizado com sucesso!', result),
        (error) => console.error('Erro ao realizar o registro do Barber:', error)
      )
    } else {
      this.client = { ...person }
      this.authService.registerClient(this.client).subscribe(
        (result) => console.log('Registro do Client realizado com sucesso!', result),
        (error) => console.error('Erro ao realizar o registro do Client:', error)
      )
    }
  }
}
