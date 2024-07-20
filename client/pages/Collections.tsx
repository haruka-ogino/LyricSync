import { Link } from 'react-router-dom'
import DeleteCollection from '../components/DeleteCollection'
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
        <p className="page-title">Collections</p>
        <ul className="collections-container">
          {data.map((collection, i) => (
            <li key={i} className="collection-item">
              <Link to={`/collections/${collection.id}`}>
                {collection.name}
              </Link>
              <br />
              <DeleteCollection id={collection.id} />
            </li>
          ))}
          <li className="collection-item">
            <Link to="/collections/new-collection">+</Link>
          </li>
        </ul>
      </>
    )
  }
}

export default Collections
