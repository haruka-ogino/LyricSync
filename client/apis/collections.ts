import request from 'superagent'
import { Collection } from '../../models/collections'

const rootUrl = '/api/v1/collections'

export async function getCollections(token: string): Promise<Collection[]> {
  try {
    const res = await request
      .get(rootUrl)
      .set('Authorization', `Bearer ${token}`)

    return res.body as Collection[]
  } catch (error) {
    throw new Error(`Failed to fetch collections: ${error}`)
  }
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
