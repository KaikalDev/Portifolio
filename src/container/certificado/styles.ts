import styled from 'styled-components'
import { Fonts, Secao } from '../../styles'

export const ContainerCerts = styled(Secao)`
  flex-direction: column;
  justify-content: start;
  gap: 16px;

  hr {
    width: 70vw;
    margin-top: 12px;
  }

  h1 {
    font-family: ${Fonts.montserrat};
  }

  div {
    display: flex;
    gap: 8px;
    justify-content: center;

    > img {
      width: 520px;
      height: 370px;
      object-fit: contain;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover {
      transition: all ease 0.3s;
      transform: scaleX(1.2);
    }

    img {
      width: 100px;
    }
  }
`
