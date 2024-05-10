import { Link, useParams } from 'react-router-dom'
import { useSongsByCollection } from '../hooks/useSongs'

export default function Songs() {
  const collectionId = Number(useParams().collectionId)
  const { data, isLoading, isError } = useSongsByCollection(collectionId)

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (data) {
    return (
      <>
        <h1>{`Songs inside collection ${collectionId}:`}</h1>
        <ul>
          {data.map((song) => (
            <li key={song.id}>
              <Link to={`/collections/${song.collectionId}/${song.id}`}>
                {song.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
