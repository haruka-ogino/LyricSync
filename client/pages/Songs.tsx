import { useParams } from 'react-router-dom'

export default function Songs() {
  const { id } = useParams()
  const collectionX = ['My Heart Will Go On', 'Dejavu', 'Seven']
  return (
    <>
      <h1>{`Songs inside the collection ${id}`}</h1>
      {collectionX.map((collection, i) => (
        <h2 key={i}>{collection}</h2>
      ))}
    </>
  )
}
