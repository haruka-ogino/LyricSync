import { useParams } from 'react-router-dom'

export default function Lyrics() {
  const { collectionId } = useParams()
  const { songId } = useParams()

  const lyricsYEn = ['Dejavu English translation']
  const lyricsYKr = ['Dejavu in Korean']

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
