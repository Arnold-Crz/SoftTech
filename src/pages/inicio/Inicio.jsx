import React from 'react';
import { Contenedor, ContenedorBoton } from './Styles';
import 'boxicons';
import { Container } from '../../stylesColorGlobal';

export function Inicio() {
  return (
    <section id="inicio">
      <Container maxWidth={'100%'}>
        <Contenedor>
          <div>
            <h1>
              Desarrollo <span>Web</span>
              <br />
              profesional
            </h1>
            <p>
              Diseñamos y desarrollamos paginas web <br />
              profesionales de la mas alta calidad.
              <br />
              Brindandote los mejores servicios para tu negocio
            </p>
            <ContenedorBoton>
              Contacto
              <i>
                <box-icon
                  size="sm"
                  type="solid"
                  color="#FFFCFC"
                  name="chevron-right"
                ></box-icon>
              </i>
            </ContenedorBoton>
          </div>

          <img src="../../public/inicioimg.svg" alt="imagendeinicio" />
        </Contenedor>
      </Container>
    </section>
  );
}
