import request from 'superagent'
import {
  AddSong,
  EditedLyrics,
  Lyrics,
  Song,
  SongData,
} from '../../models/songs'
import { useParams } from 'react-router-dom'

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

export async function addSong(input: SongData) {
  const data = { title: input.title, artist: input.artist }
  const collectionId = input.collectionId
  await request.post(`${rootUrl}/${collectionId}`).send(data)
}
