import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerFormacao = styled.div`
  padding-right: 20px;
  max-width: 50%;

  h2 {
    font-size: 38px;
    margin-bottom: 8px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    color: ${Colors.secondary};
  }

  img {
    max-width: 150px;
  }

  div {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 10px 0;

    &.top {
      border-bottom: 1px solid ${Colors.white};
    }
  }
`
