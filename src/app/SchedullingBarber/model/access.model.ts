import { Role } from './role.model'

export class Access {
  id?: number
  email: string
  password: string
  authorities?: Role[]
}
