import connection from './connection'
import { Collection } from '../../models/collections'

const db = connection

export async function getCollections(): Promise<Collection[]> {
  return db('collections')
}

export async function getLyrics(songId: number): Promise<Collection[]> {
  return db('lyrics')
    .join('songs', 'songs.id', 'song_id')
    .join('collections', 'collections.id', 'playlist_id')
    .join('languages as originLang', 'languages.id', 'original_lang')
    .join('languages as transLang', 'languages.id', 'trans_lang')
    .where('song_id', songId)
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
}
