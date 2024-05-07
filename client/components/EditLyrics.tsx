import { useState } from 'react'
import { Lyrics } from '../../models/songs'
import { useEditLyrics } from '../hooks/useSongs'

interface Props {
  lyrics: Lyrics
  lang: string
  setEditOr: React.Dispatch<React.SetStateAction<boolean>>
}

function EditLyrics({ lyrics, lang, setEditOr }: Props) {
  const initialState = {
    id: lyrics.id,
    originLyrics: lyrics.originLyrics,
    originLang: lyrics.originLangId,
    translatedLang: lyrics.transLangId,
    translatedLyrics: lyrics.translatedLyrics,
  }
  const [newLyrics, setNewLyrics] = useState(initialState)
  const mutation = useEditLyrics()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log(newLyrics)
    mutation.mutate(newLyrics)
    setEditOr(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="org-lyrics">Original Lyrics: </label>
        <br />
        <textarea
          onChange={(e) =>
            setNewLyrics({ ...newLyrics, originLyrics: e.target.value })
          }
          name="org-lyrics"
          id="org-lyrics"
          // placeholder="Original Lyrics"
          rows={10}
          value={newLyrics.originLyrics}
        />
        <button type="submit">Update Lyrics</button>
      </form>
    </>
  )
}

export default EditLyrics
