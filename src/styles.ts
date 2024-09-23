import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  background: '#00072d',
  primary: '#001c55',
  secondary: '#007acc',
  white: '#eee',
  darkBlue: '#0a2472',
  borda: '#4958b0'
}

export const Fonts = {
  roboto: '"Roboto", sans-serif',
  montserrat: '"Montserrat", sans-serif',
  oswald: `"Oswald", sans-serif`
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
`

export const Secao = styled.section`
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80vh;

  &.projetos {
    flex-direction: column;
    gap: 16px;
    height: auto;
  }
`

export default GlobalStyles
