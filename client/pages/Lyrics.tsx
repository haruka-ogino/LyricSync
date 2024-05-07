import { useParams } from 'react-router-dom'
import { useLyrics } from '../hooks/useSongs'
import LyricsDisplay from '../components/LyricsDisplay'

export default function Lyrics() {
  const { collectionId } = useParams()
  const { songId } = useParams()
  let song
  if (songId !== undefined) {
    song = Number(songId)
  } else {
    song = 1
  }
  let collection
  if (collectionId !== undefined) {
    collection = Number(collectionId)
  } else {
    collection = 1
  }

  const { data: lyrics, isLoading, isError } = useLyrics(song, collection)

  if (isLoading) return <h1>Loading song...</h1>

  if (isError) return <h1>Sorry, there was an error loading the lyrics.</h1>

  if (lyrics) {
    return (
      <>
        <h1>{`Song of id ${songId} inside collection ${collectionId}:`}</h1>
        <LyricsDisplay lyrics={lyrics} />
      </>
    )
  }
}
