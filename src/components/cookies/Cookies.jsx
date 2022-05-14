import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TagManager from 'react-gtm-module';

import styled from 'styled-components';
import CookiesImg from '../../assets/cookies.png';

const tagManagerArgs = {
  gtmId: 'GTM-W5F4NV4',
  events: {
    event: 'cookies',
  },
};

TagManager.initialize(tagManagerArgs);

function Cookies() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies')) {
      setActive(true);
    }
  }, [active]);

  const handlecookies = () => {
    setActive(false);
    localStorage.setItem('cookies', true);
  };

  return (
    <>
      <Wrapper className={active ? 'active' : ''}>
        <div>
          <img src={CookiesImg} alt="Cookies" />
          <h1>Cookies</h1>
          <p>
            Utilizamos cookies para brindarte un mejor servicio mas
            persolalizado.
          </p>
          <button onClick={handlecookies}>De acuerdo</button>
          <LinkCookies to="/aviso-cookies">Aviso de cookies</LinkCookies>
        </div>
      </Wrapper>
      <Background className={active ? 'active' : ''}></Background>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 15;
  display: none;

  div {
    position: fixed;
    max-width: 300px;
    width: calc(100% - 100px);
    height: 350px;
    padding: 10px;
    left: 10px;
    bottom: 20px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 15px;
    box-shadow: 0px 2px 20px 10px rgba(222, 222, 222, 0.25);
  }
  img {
    max-width: 100px;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }
  h1 {
    font-size: 1.8rem;
    margin-top: 20px;
  }
  p {
    font-size: 1rem;
    text-align: center;
  }

  button {
    background-color: #fc9918;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 1.2rem;
    margin-top: 10px;
    cursor: pointer;
  }

  &.active {
    display: block;
  }
`;

const LinkCookies = styled(Link)`
  color: #fc9918;
  font-size: 1.2rem;
`;

const Background = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 14;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  &.active {
    display: block;
  }
`;
export default Cookies;
