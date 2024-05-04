import db from './connection'
import { Collection } from '../../models/collections'

export async function getCollections() {
  const collections = await db('collections')
  return collections as Collection[]
}
