import { useDeleteCollection } from '../hooks/useCollections'

interface Id {
  id: number
}

function Delete({ id }: Id) {
  const mutation = useDeleteCollection()

  function handleClick() {
    if (window.confirm('Do you really want to delete the collection?')) {
      mutation.mutate(id)
      window.location.reload()
    }
  }
  return <button onClick={handleClick}>Delete</button>
}

export default Delete
