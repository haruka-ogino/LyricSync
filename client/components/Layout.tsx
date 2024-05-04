import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <Nav />
      <header>
        <h1>LyricSync</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
