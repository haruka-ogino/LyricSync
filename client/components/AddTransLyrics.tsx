import { useNavigate, useParams } from 'react-router-dom'
import { useAddLyrics } from '../hooks/useSongs'
import { useState } from 'react'
import Language from './Language'

function AddTransLyrics() {
  const [lyrics, setLyrics] = useState({
    original_lang: 0,
    trans_lang: 0,
    original_lyric: '',
    trans_lyric: '',
    romanisation: false,
    romanised_text: '',
    song_id: 0,
  })
  const mutation = useAddLyrics()
  // const navigate = useNavigate()
  // const collectionId = Number(useParams().collectionId)
  // const songId = Number(useParams().songId)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log('add lyrics')
    e.preventDefault
    mutation.mutate(lyrics)
    // navigate(`/collections/${collectionId}/${songId}`)
  }
  return (
    <>
      <Language />
      <form onSubmit={handleSubmit}>
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
        <button>Save</button>
      </form>
    </>
  )
}

export default AddTransLyrics
