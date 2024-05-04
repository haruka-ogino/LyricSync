import connection from './connection'
import { Collection } from '../../models/collections'

const db = connection

export async function getCollections(): Promise<Collection[]> {
  return db('collections')
}

export async function getLyrics(songId): Promise<Collection[]> {
  return db('collections')
}
