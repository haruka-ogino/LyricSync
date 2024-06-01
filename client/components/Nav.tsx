import { Link } from 'react-router-dom'
import '../styles/nav.css'
import { useState } from 'react'
import { useCollections } from '../hooks/useCollections'
import logo from '../styles/images/LyricSync-logo-B.png'

export default function Nav() {
  const [isShow, setIsShow] = useState(false)
  const { data } = useCollections()

  function handleClick() {
    setIsShow(!isShow)
  }

  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <div>
        <h2>
          <Link to="collections">My Collections</Link>
        </h2>
        <button onClick={handleClick}>{isShow ? '▲' : '▼'}</button>
        {isShow && (
          <ul>
            {data?.map((collection) => (
              <li key={collection.id} className="collection-list">
                <Link to={`/collections/${collection.id}`}>
                  {collection.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Link to="collections/new-collection">Create a New Collection</Link>
      </div>
    </nav>
  )
}
