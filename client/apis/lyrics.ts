import request from 'superagent'
import { Lyrics, LyricsData } from '../../models/lyrics'
import { EditedLyrics } from '../../models/songs'

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

interface AddLyrics {
  lyrics: LyricsData
  collectionId: number
  songId: number
  token: string
  sub: string
}

export async function addLyrics({
  lyrics,
  collectionId,
  songId,
  token,
  sub,
}: AddLyrics) {
  await request
    .post(`${rootUrl}/${collectionId}/${songId}`)
    .send({ lyrics, sub })
    .set('Authorization', `Bearer ${token}`)
}
