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
interface AddSong {
  title: string
  artist: string
  collection_id: number
}
export async function addSong(input: AddSong) {
  return await db('songs').insert(input)
}
