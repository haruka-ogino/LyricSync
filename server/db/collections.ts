import db from './connection'
import { Collection, CollectionData } from '../../models/collections'

export async function getCollections(id: string) {
  const collections = await db('collections').where('user_id', id)
  return collections as Collection[]
}

export async function getCollectionById(id: string) {
  return await db('collections').where({ id })
}

export async function addCollection(data: CollectionData) {
  // const user_id = data.user_id
  // await db('users').insert({ id: user_id }).onConflict('id').ignore()
  await db('collections').insert(data)
}

export async function deleteCollection(id: number) {
  await db('collections').where({ id }).delete()
}
