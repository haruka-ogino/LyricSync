import { db } from './index'
import { languages } from './schema'

export async function allLanguages() {
  return await db.select().from(languages)
}
