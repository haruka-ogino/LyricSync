import db from './connection'
import { LyricsData } from '../../models/lyrics'

export async function addLyrics(newLyrics: LyricsData) {
  return db('lyrics').insert(newLyrics)
}
