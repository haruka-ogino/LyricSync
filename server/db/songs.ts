import db from './connection'

export async function getSongsByCollection(collectionId: number) {
  return await db('songs')
    .where('songs.collection_id', collectionId)
    .join('collections', 'songs.collection_id', 'collections.id')
    .select(
      'songs.id as id',
      'songs.title as title',
      'songs.artist as artist',
      'songs.collection_id as collectionId',
      'collections.name as collectionName',
    )
}

export async function getSong(collectionId: number, songId: number) {
  return await db('songs')
    .where('songs.collection_id', collectionId)
    .andWhere('songs.id', songId)
}

export async function deleteSong(collectionId: number, songId: number) {
  try {
    const result = await db('songs')
      .where('songs.collection_id', collectionId)
      .andWhere('songs.id', songId)
      .delete()

    if (result === 0) {
      throw new Error('Song not found')
    }
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}
interface AddSong {
  title: string
  artist: string
  collection_id: number
}
export async function addSong(input: AddSong) {
  return await db('songs').insert(input)
}
