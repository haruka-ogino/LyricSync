import { db } from './index'
import { eq } from 'drizzle-orm'
import { collections } from './schema'
import { CollectionDataFE } from '../../models/collections'

export async function getCollections(id: string) {
  return await db.select().from(collections).where(eq(collections.userId, id))
}

export async function addCollection(data: CollectionDataFE) {
  await db.insert(collections).values(data)
}

export async function deleteCollection(id: number) {
  await db.delete(collections).where(eq(collections.id, id))
}
