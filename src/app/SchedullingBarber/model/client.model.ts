import { Access } from './access.model'
import { Sex } from './enum/sex.enum'

export class Client {
  id: number
  name: string
  sex: Sex
  birthday: Date
  access: Access
}
