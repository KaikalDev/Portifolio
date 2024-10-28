import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerHabilidade = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding-block: 10vh;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
