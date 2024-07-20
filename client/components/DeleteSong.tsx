import { useDeleteSong } from '../hooks/useSongs'
import { RiDeleteBin6Line } from '@remixicon/react'

interface Params {
  collectionId: number
  songId: number
}

export default function DeleteSong({ collectionId, songId }: Params) {
  const mutation = useDeleteSong()

  function handleClick() {
    const params: Params = { collectionId, songId }
    if (window.confirm('Do you really want to delete this song?')) {
      mutation.mutate(params)
    }
  }

  return (
    <button onClick={handleClick}>
      <RiDeleteBin6Line size={16} />
    </button>
  )
}
