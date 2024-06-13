import db from './connection'
import { User } from '../../models/users'

export async function getUsers() {
  return (await db('users')) as User[]
}
