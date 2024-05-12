import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav() {
  return (
    <nav>
      <Link to="collections">
        <h2>My Collections</h2>
      </Link>
      <Link to="collections/new-collection">
        <h2>Create a New Collection</h2>
      </Link>
    </nav>
  )
}
