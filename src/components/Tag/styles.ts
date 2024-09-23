import styled from 'styled-components'
import { Fonts } from '../../styles'

export const TagItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-family: ${Fonts.montserrat};
  }

  img {
    width: 50px;
  }
`
