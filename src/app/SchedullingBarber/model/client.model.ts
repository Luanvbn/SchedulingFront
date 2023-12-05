import { Access } from './access.model'
import { Sex } from './enum/sex.enum'
import { Person } from './person.model'

export class Client extends Person {
  override id: number
  access: Access
}
