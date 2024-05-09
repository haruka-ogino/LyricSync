import React, { FormEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAddSong } from '../hooks/useSongs'

export default function AddSong() {
  const collectionId = Number(useParams().collectionId)

  const [formState, setFormState] = useState({
    title: '',
    artist: '',
    collectionId: collectionId,
  })

  const mutation = useAddSong()
  const navigate = useNavigate()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate(`/${collectionId}`)
  }
  return (
    <>
      <h1>Add your song</h1>
      <h2>{`This song will be added to your playlist: ${collectionId}`}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formState.title}
          type="text"
          onChange={handleChange}
          placeholder="Enter song title"
        />
      </form>
      <form onSubmit={handleSubmit}>
        <input
          name="artist"
          value={formState.artist}
          type="text"
          onChange={handleChange}
          placeholder="Enter the artist"
        />
        <button type="submit">Save</button>
      </form>
    </>
  )
}
