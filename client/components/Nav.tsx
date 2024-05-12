import { Link } from 'react-router-dom'
import '../styles/nav.css'
import { useState } from 'react'
import { useCollections } from '../hooks/useCollections'
import logo from '../styles/images/LyricSync-logo-C.png'

export default function Nav() {
  const [isShow, setIsShow] = useState(false)
  const { data } = useCollections()

  function handleClick() {
    setIsShow(!isShow)
  }

  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <Link to="collections">
        <h2>My Collections</h2>
      </Link>
      <button onClick={handleClick}>{isShow ? '▲' : '▼'}</button>
      {isShow && (
        <ul>
          {data?.map((collection) => (
            <li key={collection.id}>
              <Link to={`/collections/${collection.id}`}>
                {collection.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="collections/new-collection">
        <h2>Create a New Collection</h2>
      </Link>
    </nav>
  )
}
