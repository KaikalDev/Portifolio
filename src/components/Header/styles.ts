import styled from 'styled-components'
import { breakpoints, Colors, Fonts } from '../../styles'

interface Props {
  isOpen: boolean
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;

  img {
    height: 50px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.primary};
    padding: 0 12vw;
  }
`

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin: 4px;
    border-radius: 3px;
    transition: 0.3s;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
  }
`

export const NavMenu = styled.nav<Props>`
  display: flex;
  gap: 55px;

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 60px;
    right: 0;
    justify-content: space-around;
    gap: 0;
    background-color: ${Colors.primary};
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const NavLink = styled.a`
  font-family: ${Fonts.montserrat};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${Colors.secondary};
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`
