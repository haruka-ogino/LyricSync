import request from 'superagent'
import { EditedLyrics, Lyrics } from '../../models/songs'

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
    throw new Error('Failed to fetch lyrics. Please try again.')
  }
}

export async function editLyrics(data: EditedLyrics) {
  try {
    const { id } = data
    const res = await request.patch(rootUrl + `/update/${id}`).send(data)

    return res.body as Lyrics
  } catch (error) {
    console.error('Error editing lyrics.')
    throw new Error('Failed to edit lyrics. Please try again.')
  }
}
