import '../styles/nav.css'
import { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const DesktopNav = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1000px) {
    display: none;
  }
`

const MobileNavIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 1000px) {
    display: block;
    position: fixed;
    left: 0.2em;
    top: 0em;
    font-size: 2em;
    font-style: normal;
    font-family: monospace;
    background: linear-gradient(
      to right,
      rgb(27, 226, 218),
      rgb(103, 126, 235)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`

const MobileNav = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  background: #444;
  position: absolute;
  top: 3.5rem;
  width: 100%;
  left: 0;

  @media (min-width: 1000px) {
    display: none;
  }
`
export default function NavBar() {
  const [toggleMobile, setToggleMobile] = useState(false)

  return (
    <>
      <div className="desktop"></div>
      <DesktopNav>
        <Nav openMobile={setToggleMobile} />
      </DesktopNav>
      <MobileNavIcon
        onClick={() => setToggleMobile((prev) => !prev)}
        style={
          !toggleMobile
            ? {
                color: 'black',
              }
            : {}
        }
      >
        {!toggleMobile ? '☰' : 'x'}
      </MobileNavIcon>
      <MobileNav open={toggleMobile}>
        <Nav openMobile={setToggleMobile} />
      </MobileNav>
    </>
  )
}
