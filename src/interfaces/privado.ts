import type { User } from './user'

export type Privado = Omit<User, 'Privado'>
