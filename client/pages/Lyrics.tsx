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

  const lyricsYEn = ['Dejavu English translation']
  const lyricsYKr = ['Dejavu in Korean']

  const { data: lyrics, isLoading, isError } = useLyrics(song)

  if (isLoading) return <h1>Loading song...</h1>

  if (isError) return <h1>Sorry, you appear to be encountering an error.</h1>

  if (lyrics) {
    return (
      <>
        <h1>{`Song of id ${songId} inside collection ${collectionId}:`}</h1>
        <div>
          <h2>English Lyrics:</h2>
          <p>{lyricsYEn}</p>
        </div>
        <div>
          <h2>Korean Lyrics:</h2>
          <p>{lyricsYKr}</p>
        </div>
      </>
    )
  }
}

// songId: number
// songTitle: string
// originLang: string
// transLang: string
// originLyrics: string
// translatedLyrics: string
// romanisation: string
// romanisedLyrics: string
