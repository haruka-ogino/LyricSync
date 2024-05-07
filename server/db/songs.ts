import db from './connection'
import { Lyrics } from '../../models/songs'

export async function getLyrics(songId: number): Promise<Lyrics> {
  return db('lyrics')
    .where('song_id', songId)
    .join('songs', 'songs.id', 'song_id')
    .join('collections', 'collections.id', 'collection_id')
    .join('languages as originLang', 'originLang.id', 'original_lang')
    .join('languages as transLang', 'transLang.id', 'trans_lang')
    .select(
      'lyrics.id as id',
      'lyrics.song_id as songId',
      'songs.title as songTitle',
      'originLang.name as originLang',
      'transLang.name as transLang',
      'originLang.id as originLangId',
      'transLang.id as transLangId',
      'lyrics.original_lyric as originLyrics',
      'lyrics.trans_lyric as translatedLyrics',
      'lyrics.romanisation as romanisation',
      'lyrics.romanised_text as romanisedLyrics',
      'collection_id as collectionId',
    )
    .first()
}

interface EditedLyrics {
  id: number
  original_lyric: string
  original_lang: number
  trans_lyric: string
  trans_lang: number
}
export async function editLyrics(id: number, editedLyrics: EditedLyrics) {
  return db('lyrics').where('id', id).update(editedLyrics)
}
