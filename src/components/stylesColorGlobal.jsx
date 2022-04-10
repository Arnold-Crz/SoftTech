import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(props) => props.maxWidth};
  margin: 0 auto;
`;

const TitleSection = styled.h2`
  position: relative;

  margin-top: 30px;
  margin-left: 90px;
  font-size: 3rem;
  color: #abaeae;

  @media (max-width: 425px) {
    text-align: start;
    left: -75px;
  }

  &::before {
    content: '';
    top: 60px;
    position: absolute;
    background-color: #fc9918;
    width: 150px;
    height: 5px;
    border-radius: 5px;
  }
  & span {
    color: #dfe3e4;
  }
`;

const primerColor = '#FFFCFC',
  segundoColor = '#FC9918',
  tercerColor = '#403F3F',
  cuartoColor = '#ABAEAE',
  quintoColor = '#DFE3E4',
  sextoColor = '#00B67A';

export {
  TitleSection,
  primerColor,
  segundoColor,
  tercerColor,
  cuartoColor,
  quintoColor,
  sextoColor,
  Container,
};
