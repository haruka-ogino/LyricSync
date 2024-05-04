import { useParams } from 'react-router-dom'
import { useLyrics } from '../hooks/useFruits'

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

  const {
    data: lyrics,
    isLoading,
    isError,
    error,
  } = useLyrics(song, collection)

  if (isLoading) return <h1>Loading song...</h1>

  if (isError) {
    return (
      <div>
        <h1>Sorry, there was an error loading the lyrics:</h1>
        <p>{error.message}</p>
      </div>
    )
  }

  if (lyrics) {
    return (
      <>
        <h1>{`Song of id ${songId} inside collection ${collectionId}:`}</h1>
        <div>
          <h2>{lyrics.originLang} Lyrics:</h2>
          <p>{lyrics.originLyrics}</p>
        </div>
        <div>
          <h2>{lyrics.transLang} Lyrics:</h2>
          <p>{lyrics.translatedLyrics}</p>
        </div>
      </>
    )
  }
}
