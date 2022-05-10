import styled from 'styled-components';

const blancoColor = '#FFFCFC',
  naranjaColor = '#FC9918',
  negroColor = '#403F3F';

const WrapperSection = styled.section`
  width: 100%;
  min-height: 100vh;
`;

// Card section
const ContenedorCards = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  > div {
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    background-color: ${blancoColor};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    h2 {
      position: relative;
      text-align: center;
      text-transform: uppercase;
      color: ${naranjaColor};
      font-size: 2.5rem;
      z-index: 1;
      margin-top: 10px;
      margin-bottom: 50px;
    }
    ::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100px;
      background-color: ${negroColor};
      border-radius: 0 0 100% 100%;
    }
    p {
      padding: 10px;
      text-align: center;
      color: ${negroColor};
      font-size: 1.1rem;
      margin-bottom: 20px;
    }

    div:nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        color: ${naranjaColor};
        width: 50%;
        height: 50px;
        font-size: 1.1rem;
        background-color: ${negroColor};
        margin-bottom: 20px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 35px;
      margin-bottom: 50px;
      li {
        width: 90%;
        display: grid;
        grid-template-columns: 20px 1fr;
        column-gap: 15px;

        p {
          justify-self: flex-start;

          margin: 0;
          padding: 0;
        }
      }
    }
  }
`;

export { ContenedorCards, WrapperSection };
