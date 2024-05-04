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
            <li key={i}>{collection.name}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default Collections
