import request from 'superagent'
import { User } from '../../models/users'

const rootUrl = '/api/v1/users'

export async function getUsers() {
  const res = await request.get(rootUrl)
  return res.body as User[]
}

export async function getUserById(id: string) {
  const res = await request.get(`${rootUrl}/${id}`)
  return res.body as User[]
}

export async function addUser(user: User) {
  await request.post(rootUrl).send(user)
}
