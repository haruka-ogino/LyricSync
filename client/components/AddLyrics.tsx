import { useNavigate, useParams } from 'react-router-dom'
import { useAddLyrics } from '../hooks/useSongs'
import { useState } from 'react'

function AddLyrics() {
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
        <br></br>
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

export default AddLyrics
