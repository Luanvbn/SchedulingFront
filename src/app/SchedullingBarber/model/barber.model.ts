import { Access } from './access.model'
import { Sex } from './enum/sex.enum'
import { Person } from './person.model'
import { Servico } from './servico.model'

export class Barber extends Person {
  override id: number
  servicos: Servico[]
  access: Access
}
