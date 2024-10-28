import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const ContainerCerts = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;

  > div:last-child {
    display: flex;
    background-color: ${Colors.primary};
    padding: 24px 48px;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    height: 60vh;

    img {
      height: 100%;
      max-width: calc(100% - 20%);
      object-fit: cover;
      border-radius: 50px;
    }

    button {
      height: 50px;
      width: 100px;
      border-radius: 50px;
      border: none;
      background-color: ${Colors.background2};
      cursor: pointer;
    }
  }
  @media (max-width: ${breakpoints.desktop}) {
    > div:last-child {
      height: auto;

      button {
        display: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`
