import { useNavigate, useParams } from 'react-router-dom'

import { useState } from 'react'
import { useAddLyrics } from '../hooks/useLyrics'
import { useLanguage } from '../hooks/useLanguage'

function AddLyrics() {
  const songId = Number(useParams().songId)
  const [lyrics, setLyrics] = useState({
    original_lang: 1,
    trans_lang: 1,
    original_lyric: '',
    trans_lyric: '',
    romanisation: false,
    romanised_text: '',
    song_id: songId,
  })
  const { data: languages } = useLanguage()

  const mutation = useAddLyrics()
  const navigate = useNavigate()
  const collectionId = Number(useParams().collectionId)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newLyrics = {
      ...lyrics,
    }
    mutation.mutate(newLyrics)
    navigate(`/collections/${collectionId}`)
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
            setLyrics({ ...lyrics, original_lyric: e.target.value })
          }
        />
        <select
          value={lyrics.original_lang}
          onChange={(e) =>
            setLyrics({ ...lyrics, original_lang: Number(e.target.value) })
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
          onChange={(e) =>
            setLyrics({ ...lyrics, trans_lyric: e.target.value })
          }
        />
        <select
          value={lyrics.trans_lang}
          onChange={(e) => {
            setLyrics({ ...lyrics, trans_lang: Number(e.target.value) })
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
