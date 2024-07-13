import request from 'superagent'
import { Language } from '../../models/languages'

const rootUrl = '/api/v1/languages'

export async function getLanguages(): Promise<Language> {
  try {
    const res = await request.get(rootUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch Language (${res.status}): ${res.error}`)
    }

    return res.body as Language
  } catch (error) {
    console.error('Error fetching Language.')
    throw new Error('Failed to fetch Language. Please try again.')
  }
}
