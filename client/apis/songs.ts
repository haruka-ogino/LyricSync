import request from 'superagent'
import { EditedLyrics, Lyrics, Song, SongData } from '../../models/songs'
import { LyricsData } from '../../models/lyrics'

const rootUrl = '/api/v1/collections'

export async function getLyrics(
  songId: number,
  collectionId: number,
): Promise<Lyrics | undefined> {
  try {
    const res = await request.get(rootUrl + `/${collectionId}/${songId}`)

    if (!res.ok) {
      throw new Error(`Failed to fetch lyrics (${res.status}): ${res.error}`)
    }

    return res.body as Lyrics
  } catch (error) {
    console.error('Error fetching lyrics.')
    // throw new Error('Failed to fetch lyrics. Please try again.')
    window.location.href = `/collections/${collectionId}/${songId}/add-lyrics`
    return
  }
}

// collections/update/lyrics/:id
export async function editLyrics(lyrics: EditedLyrics) {
  try {
    const { id } = lyrics

    const res = await request
      .patch(rootUrl + `/update/lyrics/${id}`)
      .send(lyrics)

    return res.body
  } catch (error) {
    console.error('Error editing lyrics.')
    throw new Error('Failed to edit lyrics. Please try again.')
  }
}

interface Songs extends Song {
  collectionName: string
  collectionId: number
}

export async function getSongsByCollection(collectionId: number) {
  try {
    const res = await request.get(`${rootUrl}/${collectionId}`)
    return res.body as Songs[]
  } catch (error) {
    console.log('Error getting songs in this collection')
    throw new Error(
      `Failed to get songs in ${collectionId} collection. Please try again.`,
    )
  }
}

interface Params {
  input: SongData
  token: string
  sub: string
}
export async function addSong({ input, token, sub }: Params) {
  const data = {
    title: input.title,
    artist: input.artist,
    collection_id: input.collectionId,
  }
  const collectionId = input.collectionId
  await request
    .post(`${rootUrl}/${collectionId}`)
    .send({ data, sub })
    .set('Authorization', `Bearer ${token}`)
}

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
