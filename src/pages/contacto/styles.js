import styled from 'styled-components';

const blancoColor = '#FFFCFC',
  naranjaColor = '#FC9918',
  negroColor = '#403F3F';

const WrapperSection = styled.section`
  width: 100%;
  min-height: 100vh;

  > div {
    position: relative;
    max-width: 300px;
    width: 50%;
    height: 450px;
    margin-top: 20px;
    background-color: ${naranjaColor};
    > div {
      position: absolute;
      top: 50px;
      left: 15px;
      width: 280px;
      height: 75%;
      background-color: ${negroColor};
      h2 {
        margin-top: 10px;
        text-align: center;
        color: ${blancoColor};
        font-size: 2rem;
      }
      > div {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;

        > div {
          width: 100%;
          display: grid;
          grid-template-columns: 20px 1fr;
          column-gap: 10px;

          p {
            color: ${blancoColor};
          }
        }
      }
    }
  }
`;

export { WrapperSection };
