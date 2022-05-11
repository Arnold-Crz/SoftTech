import styled from 'styled-components';

const blancoColor = '#FFFCFC',
  naranjaColor = '#FC9918',
  negrodosColor = '#2f2e41';

const Wrapperfooter = styled.footer`
  width: 100%;
  min-height: 50vh;
  background-color: ${negrodosColor};
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 600px) {
    display: block;
  }
  h2 {
    margin-top: 20px;
    font-size: 3rem;
    color: ${blancoColor};
    span {
      color: ${naranjaColor};
    }
    @media screen and (min-width: 600px) {
      margin-left: 20px;
    }
  }
  > p {
    font-size: 1.3rem;
    color: ${blancoColor};
    margin-bottom: 20px;
    @media screen and (min-width: 600px) {
      margin-left: 20px;
    }
  }
  .wrapper_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 600px) {
      width: 100%;
      display: grid;
      column-gap: 40px;
      grid-template-columns: 350px 300px 200px 100px;
      margin-bottom: 20px;
    }

    .wrapper_item_nosotros {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${blancoColor};
      }

      p {
        font-size: 1rem;
        color: ${blancoColor};
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }

    .wrapper_item_servicios {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${blancoColor};
      }

      li {
        font-size: 1rem;
        color: ${blancoColor};
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }

    .wrapper_item_contacto {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${blancoColor};
      }

      div {
        p:nth-of-type(1) {
          font-size: 1.2rem;
          color: ${blancoColor};
        }
        p:nth-of-type(2) {
          font-size: 1rem;
          color: ${blancoColor};
        }
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }

    .wrapper_item_social {
      margin-top: 20px;
      width: 100%;
      h3 {
        font-size: 1.8rem;
        color: ${blancoColor};
      }
      > div {
        display: flex;
        margin-bottom: 100px;
        gap: 20px;

        a {
          width: 20%;
          color: ${blancoColor};
        }
      }
      @media screen and (min-width: 600px) {
        display: grid;
        grid-template-rows: 50px 200px;
      }
    }
  }
`;

export { Wrapperfooter };
