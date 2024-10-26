import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${Colors.primary};
  padding: 12px;

  p {
    margin-right: 48px;
    font-size: 18px;
    font-family: ${Fonts.oswald};
    text-align: end;
  }
`
