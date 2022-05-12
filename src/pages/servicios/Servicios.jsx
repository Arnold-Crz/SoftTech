import React from 'react';
import { ContenedorCards, WrapperSection } from './Styles';

import Title from '../../components/Title';
import useObserver from '../../hooks/useObserver';

function Servicios() {
  const refObserver = useObserver();
  return (
    <WrapperSection ref={refObserver} id="servicios">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path
          fill="#F2F6F7"
          fillOpacity="1"
          d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,48C672,53,768,75,864,90.7C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Title title="S" subtitle="ervicios" />

      <ContenedorCards>
        <div className="cards">
          <h2>Diseño Web</h2>
          <box-icon color="#FFFCFC" size="lg" name="layout"></box-icon>
          <p>
            Diseñamos tu pagina web con las herramientas adecuadas para tu
            negocio. brindandote una web elegante y moderna{' '}
          </p>
          <a href="">Leer mas</a>
        </div>
        <div className="cards">
          <h2>Desarrollo Web</h2>
          <box-icon color="#FFFCFC" size="lg" name="code-alt"></box-icon>
          <p>
            Desarrollamos páginas web profesionales, rápidas y modernas que
            cumplen los estándares de calidad y requisitos de Google{' '}
          </p>
          <a href="">Leer mas</a>
        </div>
        <div className="cards">
          <h2>Soporte Web</h2>
          <box-icon color="#FFFCFC" size="lg" name="devices"></box-icon>
          <p>
            Brindamos soporte y Administracion para aquellas paginas web que
            nesecitas darle un cambio de diseno, funcionalidad y mantenimiento
          </p>
          <a href="">Leer mas</a>
        </div>
      </ContenedorCards>
    </WrapperSection>
  );
}

export default Servicios;
