import React from 'react';
import { WrapperSection } from './Styles';
import { allDatos } from '../../datos';
import Title from '../../components/Title';
import useObserver from '../../hooks/useObserver';

function Precios() {
  const refObserver = useObserver();
  return (
    <WrapperSection ref={refObserver} id="planes">
      <Title title="P" subtitle="lanes" />
      <div className="ContenedorCards">
        {allDatos.map(({ id, titulo, subtitulo, boton, link, beneficios }) => (
          <div key={id}>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
            <div>
              <a href={link}>{boton}</a>
            </div>
            <ul>
              {beneficios.map((item, index) => (
                <li key={index}>
                  <box-icon
                    type="solid"
                    color="rgb(0, 182, 122)"
                    name="badge-check"
                  />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WrapperSection>
  );
}

export default Precios;
