import { Person } from './person.model'
import { Servico } from './servico.model'

export class Barber extends Person {
  override id: number
  servicos: Servico[]
}
