import { useParams } from 'react-router-dom'

export default function Songs() {
  const { collectionId } = useParams()
  const collectionX = ['My Heart Will Go On', 'Dejavu', 'Seven']
  return (
    <>
      <h1>{`Songs inside collection ${collectionId}:`}</h1>
      <ul>
        {collectionX.map((collection, i) => (
          <li key={i}>{collection}</li>
        ))}
      </ul>
    </>
  )
}
