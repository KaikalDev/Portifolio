import styled from 'styled-components'
import { Colors, Fonts } from '../../styles'

export const ContainerContact = styled.div`
  border: 5px solid ${Colors.borda};
  padding: 12px;

  div {
    border: 5px solid ${Colors.borda};
    padding: 22px;
    background-color: ${Colors.primary};

    h3 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 24px;
      font-family: ${Fonts.oswald};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    a {
      font-family: ${Fonts.oswald};
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 8px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      img {
        width: 25px;
      }
    }

    .Button {
      border: none;
      padding: 0;
      display: flex;
      justify-content: center;
      margin-top: 18px;

      a {
        background-color: ${Colors.secondary};
        padding: 12px;
        width: max-content;
        border-radius: 50px;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        transition: all ease 0.5s;
        cursor: pointer;

        &:hover {
          transition: all ease 0.5s;
          transform: scale(1.08);
        }
      }

      img {
        width: 15px;
      }
    }
  }
`
