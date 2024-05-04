import { useCollections } from '../hooks/useCollections'

function Collections() {
  // const collections = [1, 2, 3]

  const { data, isLoading, isError } = useCollections()
  // const data = useCollections()
  console.log(data)

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
