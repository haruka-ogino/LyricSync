import { useParams } from 'react-router-dom'

export default function AddSong() {
  const { collectionId } = useParams()

  return (
    <>
      <h1>Add song</h1>
      <h2>{`This song will be added to your playlist: ${collectionId}`}</h2>
      <p>- Form inputs here -</p>
    </>
  )
}
