import { Link } from 'react-router-dom'
import '../styles/nav.css'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  // const isMobile = window.innerWidth <= 768

  const navRef = useRef<HTMLDivElement>(null)

  function showNavBar() {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive_nav')
    }
  }

  return (
    <>
      {/* {isMobile ? ( */}
      <nav ref={navRef}>
        <Link to="collections">
          <h2>My Collections</h2>
        </Link>
        <Link to="collections/X">
          <h2>My Songs from Collection X</h2>
        </Link>
        <Link to="collections/1/1">
          <h2>My Lyrics from Song Y</h2>
        </Link>
        <Link to="collections/new-collection">
          <h2>Create a New Collection</h2>
        </Link>
        <Link to="collections/X/add-song">
          <h2>Add Song to Collection X</h2>
        </Link>
        <button onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar}>
        <FaBars />
      </button>
    </>
  )
}
