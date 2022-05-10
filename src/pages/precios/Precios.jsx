import React from 'react';
import { TitleSection } from '../../stylesColorGlobal';
import { ContenedorCards, WrapperSection } from './Styles';
import { allDatos } from '../../datos';
import 'boxicons';

export function Precios() {
  return (
    <WrapperSection id="planes">
      <TitleSection>
        P<span>lanes</span>
      </TitleSection>

      <ContenedorCards>
        {allDatos.map(({ id, titulo, subtitulo, boton, beneficios }) => (
          <div key={id}>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
            <div>
              <a href="#">{boton}</a>
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
