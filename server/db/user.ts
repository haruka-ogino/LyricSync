import db from './connection'
import { User } from '../../models/users'

export async function getUsers() {
  return (await db('users')) as User[]
}

export async function getUserById(id: string) {
  return await db('users').where({ id })
}

export async function addUser(data: User) {
  await db('users').insert(data)
}
