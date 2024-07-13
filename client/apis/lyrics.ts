import request from 'superagent'
import { LyricsData } from '../../models/lyrics'

const rootUrl = '/api/v1/collections'

interface AddLyrics {
  lyrics: LyricsData
  collectionId: number
  token: string
  sub: string
}

export async function addLyrics({
  lyrics,
  collectionId,
  token,
  sub,
}: AddLyrics) {
  const songId = lyrics.song_id
  await request
    .post(`${rootUrl}/${collectionId}/${songId}`)
    .send({ lyrics, sub })
    .set('Authorization', `Bearer ${token}`)
}
