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
