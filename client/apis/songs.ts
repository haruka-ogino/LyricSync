import request from 'superagent'
import { AddSong, Song, SongData } from '../../models/songs'

const rootUrl = '/api/v1/collections'

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
}
export async function addSong({ input, token }: Params) {
  const collectionId = input.collectionId

  try {
    return await request
      .post(`${rootUrl}/${collectionId}`)
      .send({
        title: input.title,
        artist: input.artist,
        collectionId: collectionId,
      })
      .set('Authorization', `Bearer ${token}`)
  } catch (error) {
    console.error('Error adding song:', error)
    throw error
  }
}

interface DeleteSong {
  collectionId: number
  songId: number
  token: string
}
export async function deleteSong({
  collectionId,
  songId,
  token,
}: DeleteSong): Promise<void> {
  const url = `${rootUrl}/${collectionId}/${songId}`

  return await request
    .delete(url)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
}
