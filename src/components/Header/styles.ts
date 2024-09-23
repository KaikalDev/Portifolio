import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${Colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12vw;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;

  h1 {
    font-family: ${Fonts.montserrat};
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
