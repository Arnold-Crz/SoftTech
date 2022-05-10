import styled from 'styled-components';

const blancoColor = '#FFFCFC',
  naranjaColor = '#FC9918',
  negrodosColor = '#2f2e41',
  cafeColor = '#403F3F';

const WrapperSection = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  & h1 {
    font-size: 2.5rem;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 3rem;
      padding: 5px;
      margin-bottom: 20px;
      color: ${negrodosColor};
    }

    & span {
      color: #fc9918;
    }
  }

  & p {
    position: relative;
    font-size: 1.1rem;
    font-weight: 400;
    color: ${negrodosColor};
    @media (max-width: 768px) {
      padding: 5px;
      margin-left: 25px;
    }

    &::after {
      content: '';
      position: absolute;
      left: -15px;
      top: 0;
      width: 5px;
      height: 75px;
      background-color: #fc9918;
      border-radius: 3px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const WrapperBtn = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  margin-top: 10px;
  background: ${naranjaColor};
  padding: 10px;
  color: ${blancoColor};
  border-radius: 5px;
  pointer-events: auto;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 15px;
    margin-left: 15px;
  }

  &:hover {
    color: ${blancoColor};
    background-color: ${cafeColor};
  }

  &:hover i {
    transform: rotate(90deg);
  }
  & i {
    height: 24px;
    transition: transform 0.3s ease-in;
  }
`;

export { WrapperSection, WrapperBtn };
