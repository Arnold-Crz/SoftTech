import styled from 'styled-components';

const blancoColor = '#FFFCFC',
  naranjaColor = '#FC9918',
  negroColor = '#403F3F';

const WrapperSection = styled.section`
  width: 100%;
  min-height: 100vh;

  .WrapperContent {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    .Wrapper_C {
      position: relative;
      width: 50%;
      height: 450px;
      margin-top: 20px;
      margin-bottom: 20px;
      background-color: ${naranjaColor};
      > div {
        position: absolute;
        top: 50px;
        left: 15px;
        width: 280px;
        height: 75%;
        background-color: ${negroColor};
        @media screen and (min-width: 600px) {
          width: 350px;
        }
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
  }
`;

export { WrapperSection };
