import request from 'superagent'
import { AddLyrics, Lyrics } from '../../models/lyrics'
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

// interface AddLyrics {
//   lyrics: LyricsData
//   collectionId: number
//   songId: number
//   token: string
//   sub: string
// }

//lyrics/:songId (add new lyrics)
export async function addLyrics(lyrics: AddLyrics, songId: number) {
  console.log('Adding lyrics to DB:', lyrics)

  try {
    const res = await request.post(`/lyrics/${songId}`).send(lyrics)
    return res.body
  } catch (error) {
    console.error('Error adding lyrics.')
    throw new Error('Failed to add lyrics. Please try again.')
  }
}
