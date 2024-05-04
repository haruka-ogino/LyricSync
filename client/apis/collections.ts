import request from 'superagent'
import { Collection } from '../../models/collections'

const rootUrl = '/api/v1/collections'

export async function getCollections() {
  const res = await request.get(rootUrl)
  return res.body as Collection[]
}
