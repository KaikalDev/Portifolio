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
      margin-bottom: 15px;
      font-size: 22px;
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

    &.Foto {
      width: 100%;
      border: none;
      padding: 0;
      margin-top: 12px;
      display: flex;
      align-items: end;
      justify-content: space-between;

      .Perfil {
        border: 3px solid ${Colors.white};
        border-bottom: 12px solid ${Colors.white};
        border-color: ${Colors.white};
        width: max-content;
        display: flex;
        padding: 0;
        max-width: 80px;
      }

      .Button {
        background-color: transparent;
        border: 1px solid ${Colors.white};
        padding: 12px;
        height: max-content;
        border-radius: 50px;
        display: flex;
        gap: 8px;
        align-items: center;
        font-size: 12px;
        transition: all ease 0.5s;
        cursor: pointer;

        &:hover {
          transition: all ease 0.5s;
          transform: scale(1.08);
          background-color: #ffffff2f;
        }

        img {
          width: 15px;
        }
      }
    }
  }
`
