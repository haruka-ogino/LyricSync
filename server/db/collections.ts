import connection from './connection'
import { Collection, Lyrics } from '../../models/collections'

const db = connection

export async function getCollections(): Promise<Collection[]> {
  return db('collections')
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
