import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const ContainerHabilidade = styled.div`
  background-color: ${Colors.darkBlue};
  padding: 24px;
  height: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin-bottom: 12px;
    font-size: 22px;
    font-family: ${Fonts.oswald};
    font-weight: normal;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 12px;
    column-gap: 8px;
  }
`

export const ContainerEstatistic = styled.div`
  background-color: ${Colors.darkBlue};
  height: 100%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 22px;
    font-family: ${Fonts.oswald};
    font-weight: normal;
  }
`
