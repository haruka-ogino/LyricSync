import { Link } from 'react-router-dom'
import '../styles/home.css'
import { useCollections } from '../hooks/useCollections'

export default function Home() {
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
        <ul>
          {data.map((collection, i) => (
            <li key={i}>
              <Link to={`/collections/${collection.id}`}>
                {collection.name}
              </Link>
            </li>
          ))}
          <Link to="/collections/new-collection">
            <li>+</li>
          </Link>
        </ul>
      </>
    )
  }
}
