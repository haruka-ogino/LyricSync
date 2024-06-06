import { useState } from 'react'
import { useAddCollection } from '../hooks/useCollections'
import { useNavigate } from 'react-router-dom'

function NewCollection() {
  const [formState, setFormState] = useState({
    name: '',
    userId: '',
  })

  const mutation = useAddCollection()
  const navigate = useNavigate()
  // const { getAccessTokenSilently } = useAuth0()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(formState)
    navigate('/collections')
  }

  return (
    <>
      <p className="page-title">New collection</p>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          placeholder="Enter Collection's Name"
        />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default NewCollection
