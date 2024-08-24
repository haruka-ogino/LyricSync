// import db from './connection'
// import { User } from '../../models/users'

// export async function getUsers() {
//   return (await db('users')) as User[]
// }

// export async function getUserById(id: string) {
//   return await db('users').where({ id }).first()
// }

// export async function addUser(data: User) {
//   return await db('users').insert(data)
// }

import { db } from './index'
import { eq } from 'drizzle-orm'
import { users } from './schema'
import { User } from '../../models/users'

export async function getUsers() {
  return (await db.select().from(users)) as User[]
}

export async function getUserById(id: string) {
  const data = await db.select().from(users).where(eq(users.id, id))
  return data[0]
}

export async function addUser(data: User) {
  await db.insert(users).values(data)
}
