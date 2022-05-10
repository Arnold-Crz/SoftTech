import React from 'react';
import { WrapperSection, WrapperBtn } from './Styles';
import 'boxicons';

export function Inicio() {
  return (
    <WrapperSection id="inicio">
      <div>
        <h1>
          Desarrollo <span>Web</span>
          <br />
          Profesional
        </h1>
        <p>
          Diseñamos y desarrollamos paginas web <br />
          profesionales de la mas alta calidad.
          <br />
          Brindandote los mejores servicios para tu negocio
        </p>
        <WrapperBtn>
          Contacto
          <i>
            <box-icon
              size="sm"
              type="solid"
              color="#FFFCFC"
              name="chevron-right"
            ></box-icon>
          </i>
        </WrapperBtn>
      </div>

      <img src="../../public/inicioimg.svg" alt="imagendeinicio" />
    </WrapperSection>
  );
}
