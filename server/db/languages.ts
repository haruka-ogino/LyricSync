import db from './connection'

export async function allLanguages() {
  return db('languages').select()
}
