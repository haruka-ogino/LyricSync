import db from './connection'
import { Collection, CollectionData, Lyrics } from '../../models/collections'

export async function getCollections() {
  const collections = await db('collections')
  return collections as Collection[]
}

export async function addCollection(data: CollectionData) {
  return await db('collections').insert(data)
}

export async function getLyrics(songId: number): Promise<Lyrics> {
  return db('lyrics')
    .where('song_id', songId)

    .join('songs', 'songs.id', 'song_id')
    .join('collections', 'collections.id', 'collection_id')
    .join('languages as originLang', 'originLang.id', 'original_lang')
    .join('languages as transLang', 'transLang.id', 'trans_lang')
    .select(
      'lyrics.song_id as songId',
      'songs.title as songTitle',
      'originLang.name as originLang',
      'transLang.name as transLang',
      'lyrics.original_lyric as originLyrics',
      'lyrics.trans_lyric as translatedLyrics',
      'lyrics.romanisation as romanisation',
      'lyrics.romanised_text as romanisedLyrics',
    )
    .first()
}
