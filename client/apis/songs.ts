import request from 'superagent'
import { Lyrics, Message } from '../../models/songs'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

export async function getLyrics(
  songId: number,
  collectionId: number,
): Promise<Lyrics | undefined> {
  try {
    const res = await request.get(
      rootUrl + `/collections/${collectionId}/${songId}`,
    )
    return res.body as Lyrics
  } catch (e) {
    console.error(e)
  }
}
