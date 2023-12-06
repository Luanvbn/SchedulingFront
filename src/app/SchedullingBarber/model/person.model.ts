import { Access } from './access.model';
import { Sex } from "./enum/sex.enum"

export class Person {
  id: number
  name: string
  sex: Sex
  phone: string
  address: string
  birthday: Date
  access: Access
}
