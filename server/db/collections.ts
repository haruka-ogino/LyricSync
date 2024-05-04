import connection from './connection'
import { Collection } from '../../models/collections'

const db = connection

export async function getCollections(): Promise<Collection[]> {
  return db('collections')
}
