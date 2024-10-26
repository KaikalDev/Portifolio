import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const Container = styled.div`
  padding-top: 10vh;

  div {
    border-top: 3px solid ${Colors.white};
    display: flex;
    justify-content: end;
    margin-bottom: 48px;
  }

  h1 {
    font-size: 38px;
    margin-bottom: 16px;
    margin-top: 24px;
    font-family: ${Fonts.montserrat};
    background-color: ${Colors.background2};
    width: max-content;
    padding: 8px 24px;
    border-radius: 50px;
  }
`
