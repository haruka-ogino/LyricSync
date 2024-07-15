import { Link, useParams } from 'react-router-dom'
import { useSongsByCollection } from '../hooks/useSongs'
import DeleteSong from '../components/DeleteSong'

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
        <p className="page-title">{`Songs inside collection ${collectionId}:`}</p>
        <Link to={`/collections/${collectionId}/add-song`}>
          <button>Add Song</button>
        </Link>
        <ul>
          {data.map((song) => (
            <li key={song.id}>
              <DeleteSong collectionId={collectionId} songId={song.id} />
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
