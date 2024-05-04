import request from 'superagent'
import { Collection, CollectionData } from '../../models/collections'

const rootUrl = '/api/v1/collections'

export async function getCollections() {
  const res = await request.get(rootUrl)
  return res.body as Collection[]
}

export async function addCollection(data: CollectionData) {
  await request.post(rootUrl).send(data)
}

export async function deleteCollection(id: number) {
  await request.delete(`${rootUrl}/${id}`)
}
