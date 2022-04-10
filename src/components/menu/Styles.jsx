import styled from 'styled-components';
import { primerColor, tercerColor } from '../stylesColorGlobal';

const colorMenu = '#FFFCFC';
const colorMenuTexto = '#2F2E41';

const Navegacion = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 30px;
  background-color: ${colorMenu};
  box-shadow: 1px 2px 20px 0px rgba(30, 30, 60, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 80%;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    border-radius: 0px;
    bottom: 0;
    top: auto;
    margin-top: 0;
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
      width: 100vw;
      height: 100%;
      gap: 20px;
      top: -1000px;
      transition: all 0.5s ease;
      a {
        color: #fff;
      }
    }
    .ul-center.active {
      width: 100vw;
      height: 100vh;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-size: 1.8rem;
      transform: translate(0px, 316px);
      background-color: ${tercerColor};
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
