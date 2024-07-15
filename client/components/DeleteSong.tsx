import { useDeleteSong } from '../hooks/useSongs'

interface Params {
  collectionId: number
  songId: number
}

export default function DeleteSong({ collectionId, songId }: Params) {
  const mutation = useDeleteSong()

  function handleClick() {
    const params: Params = { collectionId, songId }
    mutation.mutate(params)
  }

  return <button onClick={handleClick}>-</button>
}
