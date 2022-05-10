import styled from 'styled-components';
import {
  primerColor,
  segundoColor,
  tercerColor,
} from '../../stylesColorGlobal';

const Contenedor = styled.div`
  background-color: #fff;
`;

const ContenedorCards = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 425px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .cards {
    background-color: #2f2e41;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 0 20px;

    h2 {
      color: ${segundoColor};
      margin-bottom: 40px;
      position: relative;
      &::after,
      ::before {
        content: '';
        position: absolute;
        background-color: ${segundoColor};
        width: 60px;
        height: 2px;
      }
      &::after {
        left: 0;
      }
      &::before {
        right: 0;
        top: 33px;
      }
    }

    & p {
      color: ${primerColor};
      margin-top: 20px;
    }

    & a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 40px;
      background-color: ${segundoColor};
      border-radius: 10px;
      color: ${primerColor};
      margin-top: 10px;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        color: ${segundoColor};
        background-color: ${tercerColor};
      }
    }
  }
`;

export { Contenedor, ContenedorCards };
