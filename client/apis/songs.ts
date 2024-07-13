import request from 'superagent'
import { Song, SongData } from '../../models/songs'

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
