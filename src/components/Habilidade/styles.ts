import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerHabilidade = styled.div`
  background-color: ${Colors.darkBlue};
  padding: 12px;
  height: 100%;

  h1 {
    text-align: center;
    margin-bottom: 12px;
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
  padding: 12px;
  height: 100%;

  h1 {
    text-align: center;
  }
`
