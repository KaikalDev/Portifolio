import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  background: '#00072d',
  primary: '#001c55',
  secondary: '#007acc',
  white: '#eee',
  darkBlue: '#0a2472',
  borda: '#4958b0',
  background2: '#022458'
}

export const Fonts = {
  roboto: '"Roboto", sans-serif',
  montserrat: '"Montserrat", sans-serif',
  oswald: `"Oswald", sans-serif`
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${Colors.white};
    font-family: ${Fonts.roboto};
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${Colors.background};
    overflow-x: hidden;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80vw;
  }
`

export const Secao = styled.section`
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;

  &.projetos {
    flex-direction: column;
    gap: 16px;
    height: auto;
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column-reverse;
  }
`

export default GlobalStyles
