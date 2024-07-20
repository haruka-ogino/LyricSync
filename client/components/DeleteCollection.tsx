import { useDeleteCollection } from '../hooks/useCollections'

interface Id {
  id: number
}

function DeleteCollection({ id }: Id) {
  const mutation = useDeleteCollection()

  function handleClick() {
    if (window.confirm('Do you really want to delete this collection?')) {
      mutation.mutate(id)
      window.location.reload()
    }
  }
  return <button onClick={handleClick}>Delete</button>
}

export default DeleteCollection
