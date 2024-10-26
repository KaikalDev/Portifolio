import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.primary};
    padding: 0 12vw;
  }

  img {
    height: 50px;
  }

  nav {
    display: flex;
    gap: 55px;

    a {
      font-family: ${Fonts.montserrat};
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${Colors.secondary};
      }
    }
  }
`
