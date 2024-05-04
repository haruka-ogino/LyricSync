import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav() {
  return (
    <nav>
      <Link to="collections">
        <h2>My Collections</h2>
      </Link>
      <Link to="collections/X">
        <h2>My Songs from Collection X</h2>
      </Link>
      <Link to="collections/X/Y">
        <h2>My Lyrics from Song Y</h2>
      </Link>
      <Link to="collections/new-collection">
        <h2>Create a New Collection</h2>
      </Link>
      <Link to="collections/X/add-song">
        <h2>Add Song to Collection X</h2>
      </Link>
    </nav>
  )
}
