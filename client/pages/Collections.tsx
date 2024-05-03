export default function Collections() {
  const collections = [1, 2, 3]
  return (
    <>
      <h1>Collections</h1>
      <ul>
        {collections.map((collection, i) => (
          <li key={i}>{collection}</li>
        ))}
      </ul>
    </>
  )
}
