// import db from './connection'
// import { Collection, CollectionData } from '../../models/collections'

// export async function getCollections(id: string) {
//   const collections = await db('collections').where('user_id', id)
//   return collections as Collection[]
// }

// export async function getCollectionById(id: number) {
//   return await db('collections').where({ id })
// }

// export async function addCollection(data: CollectionData) {
//   // const user_id = data.user_id
//   // await db('users').insert({ id: user_id }).onConflict('id').ignore()
//   await db('collections').insert(data)
// }

// export async function deleteCollection(id: number) {
//   await db('collections').where({ id }).delete()
// }

import { db } from './index'
import { eq } from 'drizzle-orm'
import { collections, users } from './schema'
import { Collection, CollectionDataFE } from '../../models/collections'

export async function getCollections(id: string) {
  // const rawData = await db.select().from(collections).where(eq(users.id, id))
  return await db.select().from(collections).where(eq(collections.userId, id))

  // return rawData.map((data) => ({
  //   id: data.id,
  //   name: data.name,
  //   user_id: data.userId,
  // }))
}

export async function getCollectionById(id: string) {
  return await db.select().from(collections).where(eq(collections.userId, id))
}

export async function addCollection(data: CollectionDataFE) {
  await db.insert(collections).values(data)
}

export async function deleteCollection(id: number) {
  await db.delete(collections).where(eq(collections.id, id))
}
