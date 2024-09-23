import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerSobre = styled.div`
  background-color: ${Colors.darkBlue};
  padding: 22px 12px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  line-height: 22px;

  img {
    max-width: 50%;
  }
`
