// import db from './connection'

// export async function getSongsByCollection(collectionId: number) {
//   return await db('songs')
//     .where('songs.collection_id', collectionId)
//     .join('collections', 'songs.collection_id', 'collections.id')
//     .select(
//       'songs.id as id',
//       'songs.title as title',
//       'songs.artist as artist',
//       'songs.collection_id as collectionId',
//       'collections.name as collectionName',
//     )
// }

// export async function getSong(collectionId: number, songId: number) {
//   return await db('songs')
//     .where('songs.collection_id', collectionId)
//     .andWhere('songs.id', songId)
//     .first()
// }

// export async function deleteSong(collectionId: number, songId: number) {
//   try {
//     const result = await db('songs')
//       .where('songs.collection_id', collectionId)
//       .andWhere('songs.id', songId)
//       .delete()

//     if (result === 0) {
//       throw new Error('Song not found')
//     }
//   } catch (error) {
//     console.error('Database error:', error)
//     throw error
//   }
// }
// interface AddSong {
//   title: string
//   artist: string
//   collection_id: number
// }
// export async function addSong(input: AddSong) {
//   return await db('songs').insert(input)
// }

import { db } from './index'
import { eq, and } from 'drizzle-orm'
import { collections, songs } from './schema'
import { SongData } from '../../models/songs'

export async function getSongsByCollection(collectionId: number) {
  return await db
    .select({
      id: songs.id,
      title: songs.title,
      artist: songs.artist,
      collectionId: songs.collectionId,
      collectionsName: collections.name,
    })
    .from(songs)
    .leftJoin(collections, eq(songs.collectionId, collections.id))
    .where(eq(songs.collectionId, collectionId))
}

export async function getSong(collectionId: number, songId: number) {
  const data = await db
    .select()
    .from(songs)
    .where(and(eq(songs.collectionId, collectionId), eq(songs.id, songId)))

  return data[0]
}

export async function deleteSong(collectionId: number, songId: number) {
  try {
    await db
      .delete(songs)
      .where(and(eq(songs.collectionId, collectionId), eq(songs.id, songId)))

    // if (result === 0) {
    //   throw new Error('Song not found')
    // }
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

export async function addSong(input: SongData) {
  return await db.insert(songs).values(input)
}
