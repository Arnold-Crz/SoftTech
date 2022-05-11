import styled from 'styled-components';

const blancoColor = '#FFFCFC',
  negrodosColor = '#2f2e41';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${negrodosColor};
  border-radius: 20px;
  margin-bottom: 50px;

  form {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem;
    margin-bottom: 20px;
    .input-div {
      width: 100%;
      margin: 5px 0;
      padding: 1rem 0;
      border-bottom: 1px solid ${blancoColor};
    }
    .input-div.focus div h5 {
      top: -20px;
      font-size: 0.7rem;
    }
    .input-div > div {
      position: relative;
      height: 20px;
    }
    .input-div > div > h5 {
      position: absolute;
      top: -5px;
      left: 0;
      transform: translateY(-50%);
      color: ${blancoColor};
      font-size: 0.9rem;
      transition: 0.3s;
    }
    input {
      position: relative;
      font-size: 1.1rem;
      font-weight: 100;
      top: 10px;
      left: -6px;
      width: 100%;
      color: #fff;
    }
    .error {
      display: flex;
      align-items: center;
      margin-top: 20px;
      color: #f3b60d;
      font-size: 0.8rem;
      font-weight: 600;

      span {
        margin-left: 5px;
      }

      img {
        margin-left: 5px;
        width: 15px;
        height: 15px;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      width: 50%;
      height: 50px;
      font-weight: 400;
      font-size: 1.2rem;
      font-family: Poppins;
      border-radius: 10px;
      padding: 0.8rem;
      background-image: linear-gradient(90deg, #f12711 -70%, #f5af19 70%);

      color: #fff;

      transition: 0.1s ease;
      margin-bottom: 10px;
      cursor: pointer;
    }
    button:hover {
      background-position: right;
      border: 3px solid #fff;
    }
  }
`;

export { Wrapper };
