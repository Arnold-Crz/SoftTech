import styled from 'styled-components';
import { primerColor, tercerColor } from '../../stylesColorGlobal';

const colorMenu = '#FFFCFC';
const colorMenuTexto = '#2F2E41';

const Navegacion = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  > div {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${colorMenu};
    width: 80%;
    border-radius: 15px;
    position: fixed;
    box-shadow: 1px 2px 20px 0px rgba(30, 30, 60, 0.1);
    z-index: 10;

    @media (max-width: 768px) {
      position: fixed;
      width: 100%;
      height: 60px;
      border-radius: 0;
      bottom: 0;
    }
  }

  .ul-center {
    display: flex;

    a {
      color: ${colorMenuTexto};
      margin-left: 10px;
      font-weight: 600;

      &.active {
        color: #fc9918;
      }
    }
  }

  @media (max-width: 768px) {
    .ul-center {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${tercerColor};
      width: 100%;
      min-height: 100vh;
      gap: 20px;
      top: 100px;
      left: 0px;
      transition: all 0.5s ease;
      font-size: 2.5rem;
      a {
        color: #fff;
      }
    }
    .ul-center.active {
      top: -680px;
      left: 0px;
    }
  }
`;
const Imagenes = styled.img`
  margin-left: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const MenuRight = styled.ul`
  display: flex;
  margin-right: 20px;
  @media screen, (max-width: 768px) {
    display: none;
  }

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    cursor: pointer;

    & i {
      color: #2f2e41;

      &:hover {
        color: #fc9918;
      }
    }
  }
`;

export { Navegacion, Imagenes, MenuRight };
