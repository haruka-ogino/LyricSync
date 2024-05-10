import { Link } from 'react-router-dom'
import Delete from '../components/Delete'
import { useCollections } from '../hooks/useCollections'

function Collections() {
  const { data, isLoading, isError } = useCollections()

  if (isLoading) {
    return <p>is loading...</p>
  }
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (data) {
    return (
      <>
        <h1>Collections</h1>
        <ul>
          {data.map((collection, i) => (
            <li key={i}>
              <Link to={`/collections/${collection.id}`}>
                {collection.name}
              </Link>
              <Delete id={collection.id} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Collections
