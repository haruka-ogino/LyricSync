import { Lyrics } from '../../models/songs'
import { useEditLyrics } from '../hooks/useSongs'

interface Props {
  lyrics: Lyrics
  lang: string
}

function EditLyrics({ lyrics, lang }: Props) {
  const mutation = useEditLyrics()

  return <button>Edit Lyrics</button>
}

export default EditLyrics
