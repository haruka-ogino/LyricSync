import request from 'superagent'
import { Collection, CollectionDataFE } from '../../models/collections'

const rootUrl = '/api/v1/collections'

export async function getCollections() {
  const res = await request.get(rootUrl)
  return res.body as Collection[]
}

interface Params {
  data: CollectionDataFE
  token: string
  sub: string
}
export async function addCollection({ data, token, sub }: Params) {
  await request
    .post(rootUrl)
    .send({ data, sub })
    .set('Authorization', `Bearer ${token}`)
}

export async function deleteCollection(id: number) {
  await request.delete(`${rootUrl}/${id}`)
}
