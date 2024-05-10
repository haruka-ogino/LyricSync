import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import React from 'react'

export default function Layout() {
  return (
    <>
      <React.Fragment>
        <Nav />
      </React.Fragment>
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
