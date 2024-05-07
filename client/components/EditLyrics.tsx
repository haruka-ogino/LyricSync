import { useEditLyrics } from '../hooks/useSongs'

interface Props {
  id: number
  lang: string
}

function EditLyrics() {
  const mutation = useEditLyrics()

  return <button>Edit Lyrics</button>
}

export default EditLyrics
