import { useParams } from 'react-router-dom'

export default function Songs() {
  const { id } = useParams()
  const collectionX = ['My Heart Will Go On', 'Dejavu', 'Seven']
  return (
    <>
      <h1>{`Songs inside collection ${id}:`}</h1>
      <ul>
        {collectionX.map((collection, i) => (
          <li key={i}>{collection}</li>
        ))}
      </ul>
    </>
  )
}
