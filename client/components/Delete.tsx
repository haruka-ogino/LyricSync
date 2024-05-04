import { useDeleteCollection } from '../hooks/useCollections'

interface Prop {
  id: number
}

function Delete({ id }: Prop) {
  const mutation = useDeleteCollection()

  function handleClick() {
    mutation.mutate(id)
    window.location.reload()
  }
  return <button onClick={handleClick}>Delete</button>
}

export default Delete
