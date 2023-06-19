import { Barber } from './barber.model'
import { Client } from './client.model'
import { Servico } from './servico.model'

export class Scheduling {
  id: number
  client: Client
  barber: Barber
  dataInicio: Date
  dataFim: Date
  servicos: Servico[]
}
