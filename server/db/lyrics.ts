// import db from './connection'
// import { LyricsData } from '../../models/lyrics'
// import { Lyrics } from '../../models/songs'

// export async function getLyrics(songId: number): Promise<Lyrics> {
//   return db('lyrics')
//     .where('song_id', songId)
//     .join('songs', 'songs.id', 'song_id')
//     .join('collections', 'collections.id', 'collection_id')
//     .join('languages as originLang', 'originLang.id', 'original_lang')
//     .join('languages as transLang', 'transLang.id', 'trans_lang')
//     .select(
//       'lyrics.id as id',
//       'lyrics.song_id as songId',
//       'songs.title as songTitle',
//       'originLang.name as originLang',
//       'transLang.name as transLang',
//       'originLang.id as originLangId',
//       'transLang.id as transLangId',
//       'lyrics.original_lyric as originLyrics',
//       'lyrics.trans_lyric as translatedLyrics',
//       'lyrics.romanisation as romanisation',
//       'lyrics.romanised_text as romanisedLyrics',
//       'collection_id as collectionId',
//     )
//     .first()
// }

// interface EditedLyrics {
//   id: number
//   original_lyric: string
//   original_lang: number
//   trans_lyric: string
//   trans_lang: number
// }
// export async function editLyrics(id: number, editedLyrics: EditedLyrics) {
//   return db('lyrics').where('id', id).update(editedLyrics)
// }

// export async function addLyrics(newLyrics: LyricsData) {
//   return db('lyrics').insert(newLyrics)
// }

import { db } from './index'
import { eq, sql } from 'drizzle-orm'
import { collections, languages, lyrics, songs } from './schema'
import { AddLyrics } from '../../models/lyrics'
import { alias } from 'drizzle-orm/sqlite-core'

export async function getLyrics(songId: number) {
  const originLang = alias(languages, 'originLang')
  const transLang = alias(languages, 'transLang')

  const data = await db
    .select({
      id: lyrics.id,
      songId: lyrics.songId,
      songTitle: songs.title,
      originLangName: originLang.name,
      transLangName: transLang.name,
      originLangId: originLang.id,
      transLangId: transLang.id,
      originLyrics: lyrics.originalLyric,
      translatedLyrics: lyrics.transLyric,
      romanisation: lyrics.romanisation,
      romanisedLyrics: lyrics.romanisedText,
      collectionId: collections.id,
    })
    .from(lyrics)
    .leftJoin(songs, sql`${songs.id} = ${lyrics.songId}`)
    .leftJoin(collections, sql`${collections.id} = ${songs.collectionId}`)
    .leftJoin(originLang, eq(originLang.id, lyrics.originalLang))
    .leftJoin(transLang, eq(transLang.id, lyrics.transLang))
    .where(eq(lyrics.songId, songId))

  return data[0]
}

interface EditedLyrics {
  id: number
  originalLyric: string
  originalLang: number
  transLyric: string
  transLang: number
}
export async function editLyrics(id: number, editedLyrics: EditedLyrics) {
  return await db.update(lyrics).set(editedLyrics).where(eq(lyrics.id, id))
}

export async function addLyrics(newLyrics: AddLyrics) {
  return db.insert(lyrics).values(newLyrics)
}
