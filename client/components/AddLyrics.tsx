import { useAddLyrics } from '../hooks/useSongs'

function AddLyrics() {
  const mutation = useAddLyrics()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault
    console.log('add lyrics')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="org-lyrics">Original Lyrics: </label>
        <br />
        <textarea
          name="org-lyrics"
          id="org-lyrics"
          rows={10}
          placeholder="Add the lyrics in original language"
        />
        <br></br>
        <label htmlFor="trs-lyrics">Translated Lyrics: </label>
        <br />
        <textarea
          name="trs-lyrics"
          id="trs-lyrics"
          rows={10}
          placeholder="Add the lyrics in translated language"
        />
      </form>
    </>
  )
}

export default AddLyrics
