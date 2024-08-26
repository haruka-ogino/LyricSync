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
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="org-lyrics">Original Lyrics: </label>
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
        <br></br>
        <textarea
          name="org-lyrics"
          className="textarea"
          id="originalLyric"
          rows={10}
          placeholder="Add the lyrics in original language"
          onChange={(e) =>
            setLyrics({ ...lyrics, originalLyric: e.target.value })
          }
        />

        <div>
          <label htmlFor="trs-lyrics">Translated Lyrics: </label>
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
          </select>{' '}
          <br />
          <textarea
            name="trs-lyrics"
            className="textarea"
            id="trs-lyrics"
            rows={10}
            placeholder="Add the lyrics in translated language"
            onChange={(e) =>
              setLyrics({ ...lyrics, transLyric: e.target.value })
            }
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default AddLyrics
