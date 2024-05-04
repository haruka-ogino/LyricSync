import db from './connection'
import { Collection, CollectionData } from '../../models/collections'

export async function getCollections() {
  const collections = await db('collections')
  return collections as Collection[]
}

export async function addCollection(data: CollectionData) {
  return await db('collections').insert(data)
}
