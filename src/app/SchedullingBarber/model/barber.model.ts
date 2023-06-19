import { Access } from './access.model'
import { Sex } from './enum/sex.enum'
import { Servico } from './servico.model'

export class Barber {
  id: number
  name: string
  sex: Sex
  phone: string
  address: string
  birthday: Date
  servicos: Servico[]
  access: Access
}
