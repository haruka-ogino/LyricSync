import { Link } from 'react-router-dom'
import '../styles/nav.css'
import { useState } from 'react'
import { useCollections } from '../hooks/useCollections'
import logo from '../styles/images/LyricSync-logo-B.png'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav() {
  const [isShow, setIsShow] = useState(false)
  const { data } = useCollections()

  const { user, logout, loginWithRedirect } = useAuth0()

  function handleClick() {
    setIsShow(!isShow)
  }

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>

      <div>
        <h2>
          <Link to="collections">My Collections</Link>
        </h2>
        <button id="button" onClick={handleClick} data-testid="button">
          {isShow ? '▲' : '▼'}
        </button>
        {isShow && (
          <ul className="nav-items">
            {data?.map((collection) => (
              <li
                id={String(collection.id)}
                key={collection.id}
                className="collection-list"
                data-testid={collection.id}
              >
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
