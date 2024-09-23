import styled from 'styled-components'
import { TagItem } from '../Tag/styles'
import { Colors, Fonts } from '../../styles'

export const Gif = styled.img`
  width: 40%;
  height: 250px;
  object-fit: cover;
  object-position: top;

  &:hover {
    animation: scrollDown 20s ease-in-out infinite;

    @keyframes scrollDown {
      0% {
        object-position: top;
      }
      50% {
        object-position: bottom;
      }
      100% {
        object-position: top;
      }
    }
  }
`

export const ContainerProjeto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  width: 100%;
  padding: 25px;
  background-color: ${Colors.darkBlue};
  text-align: justify;

  &:nth-child(even) {
    flex-direction: row-reverse;

    > div {
      div {
        flex-direction: row-reverse;
      }
    }
  }

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
      display: flex;
      gap: 12px;
    }
  }

  a {
    font-family: ${Fonts.montserrat};
    transition: color 0.3s ease;

    &:hover {
      color: ${Colors.secondary};
    }
  }

  ${TagItem} {
    img {
      height: 30px;
      width: 30px;
    }
  }
`
