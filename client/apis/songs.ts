import request from 'superagent'
import { Lyrics, Message } from '../../models/songs'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

// export async function getLyrics(
//   songId: number,
//   collectionId: number,
// ): Promise<Lyrics | undefined> {
//   try {
//     const res = await request.get(
//       rootUrl + `/collections/${collectionId}/${songId}`,
//     )
//     return res.body
//   } catch (e) {
//     console.error(e)
//   }
// }

export async function getLyrics(
  songId: number,
  collectionId: number,
): Promise<Lyrics | undefined> {
  try {
    const res = await request.get(
      rootUrl + `/collections/${collectionId}/${songId}`,
    )

    // Check if response status is not OK (e.g., 4xx or 5xx)
    if (!res.ok) {
      throw new Error(`Failed to fetch lyrics (${res.status}): ${res.error}`)
    }

    return res.body as Lyrics // Assuming res.body is the lyrics object
  } catch (error) {
    console.error('Error fetching lyrics:', error)
    throw new Error('Failed to fetch lyrics. Please try again.') // Re-throw the error to propagate it to the caller
  }
}
