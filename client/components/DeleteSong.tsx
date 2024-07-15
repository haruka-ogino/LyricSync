import { useDeleteSong } from '../hooks/useSongs'

interface Params {
  collectionId: number
  songId: number
}

export default function DeleteSong({ collectionId, songId }: Params) {
  const mutation = useDeleteSong()

  function handleClick() {
    const params: Params = { collectionId, songId }
    if (window.confirm('Do you really want to delete the song?')) {
      mutation.mutate(params)
    }
  }

  return <button onClick={handleClick}>-</button>
}
