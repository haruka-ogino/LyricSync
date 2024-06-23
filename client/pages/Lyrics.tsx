import { useParams } from 'react-router-dom'
import { useLyrics } from '../hooks/useSongs'
import LyricsDisplay from '../components/LyricsDisplay'
import { useState } from 'react'
import LyricsInLine from '../components/LyricsInLine'

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

  const [inLine, setInLine] = useState(false)

  const { data: lyrics, isLoading, isError } = useLyrics(song, collection)

  if (isLoading) return <h1>Loading song...</h1>

  if (isError) return <h1>Sorry, there was an error loading the lyrics.</h1>

  if (lyrics) {
    return (
      <>
        <p className="page-title">{lyrics.songTitle}</p>
        {/* <h2>{`Song of id ${songId} inside collection ${collectionId}:`}</h2> */}
        {!inLine ? (
          <>
            <button onClick={() => setInLine(true)}>
              show lyrics line by line
            </button>
            <section
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <LyricsDisplay lyrics={lyrics} lang="original" />
              <LyricsDisplay lyrics={lyrics} lang="translated" />
            </section>
          </>
        ) : (
          <>
            <button onClick={() => setInLine(false)}>
              show lyrics side by side
            </button>
            <LyricsInLine lyrics={lyrics} />
          </>
        )}
      </>
    )
  }
}
