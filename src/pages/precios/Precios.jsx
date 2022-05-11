import React from 'react';
import { ContenedorCards, WrapperSection } from './Styles';
import { allDatos } from '../../datos';
import 'boxicons';
import Title from '../../components/Title';

function Precios() {
  return (
    <WrapperSection id="planes">
      <Title title="P" subtitle="lanes" />

      <ContenedorCards>
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
      </ContenedorCards>
    </WrapperSection>
  );
}

export default Precios;
