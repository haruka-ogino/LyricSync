import db from './connection'
import { User } from '../../models/users'

export async function getUsers() {
  return (await db('users')) as User[]
}

export async function getUserById(id: string) {
  return await db('users').where({ id }).first()
}

export async function addUser(data: User) {
  return await db('users').insert(data)
}
