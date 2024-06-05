import db from './connection'
import { Collection, CollectionData } from '../../models/collections'
// import { useAuth0 } from '@auth0/auth0-react'

export async function getCollections() {
  const collections = await db('collections')
  return collections as Collection[]
}

export async function addCollection(data: CollectionData) {
  // const { getAccessTokenSilently } = useAuth0()

  // const token = await getAccessTokenSilently()

  // // Decode the JWT token without verification (not recommended for production)
  // const decodedToken = jwt.decode(token)

  // // Get the 'sub' claim
  // const sub = decodedToken.sub
  // console.log('auth sub from token string: ' + sub)

  return await db('collections').insert(data)
}

export async function deleteCollection(id: number) {
  await db('collections').where({ id }).delete()
}
