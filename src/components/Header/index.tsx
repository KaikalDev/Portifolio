import React, { useState } from 'react'
import { HeaderContainer, HamburgerIcon, NavMenu, NavLink } from './styles'
import Logo from '../../assets/images/Logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer>
      <div>
        <h1>
          <img src={Logo} alt="Kaique" />
        </h1>
        <HamburgerIcon onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink href="#Home">Home</NavLink>
          <NavLink href="#SobreMim">Sobre mim</NavLink>
          <NavLink href="#Linguagens">Linguagens</NavLink>
          <NavLink href="#Projetos">Projetos</NavLink>
          <NavLink href="#Certificados">Certificados</NavLink>
        </NavMenu>
      </div>
    </HeaderContainer>
  )
}

export default Header
