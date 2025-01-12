import styled from 'styled-components'
import { TagItem } from '../Tag/styles'
import { breakpoints, Colors, Fonts } from '../../styles'

export const Gif = styled.img`
  width: 40%;
  height: 300px;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;

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

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: auto;
  }
`

export const ContainerProjeto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 12px;
  background-color: ${Colors.darkBlue};
  text-align: justify;
  border-radius: 20px;

  h2 {
    font-family: ${Fonts.montserrat};
  }

  p {
    line-height: 22px;
    font-size: 18px;
    font-family: ${Fonts.montserrat};
  }

  > div {
    max-width: calc(60% - 32px);
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
      display: flex;
      max-width: 100%;
      flex-wrap: wrap;
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

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    > div {
      max-width: 100%;
      div:last-child {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    > div {
      div:last-child {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`
