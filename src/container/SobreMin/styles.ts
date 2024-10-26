import styled from 'styled-components'
import { Colors, Container, Fonts } from '../../styles'

export const ContainerSobre = styled.div`
  background-color: ${Colors.darkBlue};
  padding: 24px 15%;
  height: 60vh;
  justify-content: space-between;
  display: flex;

  > ${Container} {
    display: flex;
    gap: 8%;
    justify-content: space-between;
  }

  .Foto {
    width: 45%;
    height: 100%;
    position: relative;

    img {
      border-radius: 30px;
      position: absolute;
      object-fit: cover;

      &:first-child {
        width: 80%;
        top: 0;
        left: 0;
      }
      &:last-child {
        width: 40%;
        bottom: 0;
        right: 0;
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;

    h3,
    span {
      font-weight: normal;
      font-size: 32px;
      font-family: ${Fonts.montserrat};
    }

    span {
      font-weight: bold;
    }

    p {
      line-height: 24px;
      font-size: 18px;
      text-align: justify;
      font-family: ${Fonts.montserrat};
    }
  }
`
