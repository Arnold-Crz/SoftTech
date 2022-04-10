import styled from 'styled-components';
import {
  cuartoColor,
  primerColor,
  quintoColor,
  segundoColor,
  tercerColor,
} from '../stylesColorGlobal';

// Card section
const ContenedorCards = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0px;
  }
`;

const Card = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 350px;
  height: 1050px;
  border-radius: 50px;
  background: #f2f6f7;
  overflow: hidden;
  box-shadow: 27px 20px 30px #daddde, -27px -27px 35px #ffffff;
  z-index: -1;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: -100px;
    width: 100%;
    height: 200px;
    background-color: ${segundoColor};
    border-radius: 50%;
  }
`;
const TituloCard = styled.h2`
  position: relative;
  color: ${primerColor};
  top: -30px;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    top: -60px;
  }
`;
const ParrafoCard = styled.p`
  height: 150px;
  margin-top: 50px;

  @media (max-width: 768px) {
    height: 100px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

const BotonCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  padding: 5px;
  background-color: ${segundoColor};
  color: ${primerColor};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: ${tercerColor};
    color: ${segundoColor};
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const BeneficiosCard = styled.div`
  width: 100%;
  height: 650px;

  ul {
    margin-bottom: 15px;
    &:nth-child(1) {
      margin-top: 15px;
    }
    li {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
export {
  ContenedorCards,
  BeneficiosCard,
  Card,
  TituloCard,
  ParrafoCard,
  BotonCard,
};
