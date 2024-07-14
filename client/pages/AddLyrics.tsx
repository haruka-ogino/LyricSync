import { useNavigate, useParams } from 'react-router-dom'

import { useState } from 'react'
import { useAddLyrics } from '../hooks/useLyrics'
import { useLanguage } from '../hooks/useLanguage'

function AddLyrics() {
  const songId = Number(useParams().songId)
  const [lyrics, setLyrics] = useState({
    originalLang: 1,
    transLang: 1,
    originalLyric: '',
    transLyric: '',
    romanisation: false,
    romanisedText: '',
    songId: songId,
  })
  const { data: languages } = useLanguage()

  const mutation = useAddLyrics()
  // const navigate = useNavigate()
  // const collectionId = Number(useParams().collectionId)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newLyrics = {
      ...lyrics,
    }
    console.log('new lyrics:', newLyrics)
    mutation.mutate(newLyrics)
    // navigate(`/collections/${collectionId}/${songId}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="org-lyrics">Original Lyrics: </label>
        <br />

        <textarea
          name="org-lyrics"
          id="original_lyric"
          rows={10}
          placeholder="Add the lyrics in original language"
          onChange={(e) =>
            setLyrics({ ...lyrics, originalLyric: e.target.value })
          }
        />
        <select
          value={lyrics.originalLang}
          onChange={(e) =>
            setLyrics({ ...lyrics, originalLang: Number(e.target.value) })
          }
        >
          <option value="" disabled>
            Select Language
          </option>
          {languages?.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>

        <label htmlFor="trs-lyrics">Translated Lyrics: </label>
        <br />
        <textarea
          name="trs-lyrics"
          id="trs-lyrics"
          rows={10}
          placeholder="Add the lyrics in translated language"
          onChange={(e) => setLyrics({ ...lyrics, transLyric: e.target.value })}
        />
        <select
          value={lyrics.transLang}
          onChange={(e) => {
            setLyrics({ ...lyrics, transLang: Number(e.target.value) })
          }}
        >
          <option value="" disabled>
            Select Language
          </option>
          {languages?.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
        <button>Save</button>
      </form>
    </>
  )
}

export default AddLyrics
