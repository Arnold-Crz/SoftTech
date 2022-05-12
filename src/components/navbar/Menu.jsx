import { useState } from 'react';

import { Navegacion, Imagenes, MenuRight } from './Styles';
import MenuHamburguesa from './MenuHamburguesa';

import Icon from '../../assets/iconicon.svg';

function Menu() {
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
        <Imagenes src={Icon} alt="icono" />

        <ul className={`ul-center ${click ? 'active' : ''}`}>
          {listOptions.map(({ route, text }, index) => (
            <a key={index} onClick={handleClick} href={route}>
              {text}
            </a>
          ))}
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

export default Menu;
