import request from 'superagent'
import { Collection, CollectionDataFE } from '../../models/collections'

const rootUrl = '/api/v1/collections'

export async function getCollections() {
  const res = await request.get(rootUrl)
  return res.body as Collection[]
}

// interface Params {
//   data: CollectionDataFE
//   token: string
//   userId: string
// }

interface Params {
  name: string
  userId: string
  token: string
}

export async function addCollection({ name, userId, token }: Params) {
  await request
    .post(rootUrl)
    .send({ name, userId })
    .set('Authorization', `Bearer ${token}`)
}

export async function deleteCollection(id: number) {
  await request.delete(`${rootUrl}/${id}`)
}
