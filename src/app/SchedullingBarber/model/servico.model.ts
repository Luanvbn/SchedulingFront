import { Barber } from './barber.model'
import { Scheduling } from './scheduling.model'

export class Servico {
  id: number
  nomeServico: string
  valorServico: number
  barber: Barber
  schedules: Scheduling[]
}
