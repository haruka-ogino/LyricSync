// @media (min-width: 769px) {
//   display: none;
// }
import '../styles/nav.css'
import { useState } from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const DesktopNav = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileNavIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
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
  const [isShow, setIsShow] = useState(false)
  const [toggleMobile, setToggleMobile] = useState(false)

  return (
    <>
      <div className="desktop"></div>
      <DesktopNav>
        <Nav />
      </DesktopNav>
      <MobileNavIcon onClick={() => setToggleMobile((prev) => !prev)}>
        &#9776;
      </MobileNavIcon>
      <MobileNav open={toggleMobile}>
        <Nav />
      </MobileNav>
    </>
  )
}
