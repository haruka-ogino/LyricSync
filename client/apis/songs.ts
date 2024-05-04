import request from 'superagent'
import { Lyrics } from '../../models/collections'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

export async function getLyrics(songId: number): Promise<Lyrics | undefined> {
  try {
    const res = await request.get(rootUrl + `/collections/1/${songId}`)
    return res.body as Lyrics
  } catch (e) {
    console.error(e)
  }
}
