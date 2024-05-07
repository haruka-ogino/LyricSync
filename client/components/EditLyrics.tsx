import { useState } from 'react'
import { Lyrics } from '../../models/songs'
import { useEditLyrics } from '../hooks/useSongs'

interface Props {
  lyrics: Lyrics
  lang: string
}

function EditLyrics({ lyrics, lang }: Props) {
  console.log(lyrics)
  const initialState = {
    id: lyrics.id,
    originLyrics: lyrics.originLyrics,
    originLang: lyrics.originLang,
    translatedLang: lyrics.transLang,
    translatedLyrics: lyrics.translatedLyrics,
  }
  const [newLyrics, setNewLyrics] = useState(initialState)
  const mutation = useEditLyrics()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // console.log(char)
    mutation.mutate(newLyrics)
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
          placeholder="Original Lyrics"
          rows={10}
          value={newLyrics.originLyrics}
        />
      </form>
    </>
  )
}

export default EditLyrics
