import React from 'react';
import { Navegacion, Imagenes, MenuRight } from './Styles';
import { useState } from 'react';
import MenuHamburguesa from './MenuHamburguesa';
import ScrollSpy from 'react-scrollspy-navigation';
export function Menu() {
  const listOptions = [
    { text: 'Inicio', route: '#inicio' },
    { text: 'Servicios', route: '#servicios' },
    { text: 'Planes', route: '#planes' },
    { text: 'Contacto', route: '#contacto' },
  ];

  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };
  return (
    <Navegacion>
      <div>
        <Imagenes src="../public/iconicon.svg" alt="icono" />

        <ul className={`ul-center ${click ? 'active' : ''}`}>
          <ScrollSpy>
            {listOptions.map(({ route, text }, index) => (
              <a
                key={index}
                onClick={handleClick}
                href={route}
                ref={React.createRef()}
              >
                {text}
              </a>
            ))}
          </ScrollSpy>
        </ul>

        <div>
          <MenuRight>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=50433038039&text=Hola Buen dia. estoy interes@ en trabajar juntos en un proyecto.">
                <i className="bx bxl-whatsapp bx-sm"></i>
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/codespacehn/">
                <i className="bx bxl-facebook bx-sm"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/codespace_hn/">
                <i className="bx bxl-instagram bx-sm"></i>
              </a>
            </li>
          </MenuRight>
        </div>

        <MenuHamburguesa click={click} handleClick={handleClick} />
      </div>
    </Navegacion>
  );
}
