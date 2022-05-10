import { Wrapperfooter } from './styles';

import Instagram from './../../assets/instagram.svg';
import Facebook from './../../assets/facebook.svg';

function Footer() {
  return (
    <Wrapperfooter>
      <h2>
        Code <span>Space</span>
      </h2>
      <p>Soluciones tecnologicas</p>

      <div className="wrapper_item">
        <div className="wrapper_item_nosotros">
          <h3>Sobre CodeSpace</h3>
          <p>
            CodeSpace es una pequena empresa que busca implememtar nuevas
            tecnologias para aquellas pequenas y medianas empresas que buscan
            tener un espacio en la web y promocionar cualquie tipo de producto
            de su conveniencia
          </p>
        </div>
        <div className="wrapper_item_servicios">
          <h3>Servicios</h3>
          <ul>
            <li>Diseno web</li>
            <li>Landing Pages</li>
            <li>Administrador de paginas Webs</li>
            <li>Adminitrador de CMS</li>
            <li>E-Commerce</li>
            <li>Diseno web</li>
          </ul>
        </div>
        <div className="wrapper_item_contacto">
          <h3>Contacto</h3>
          <div>
            <p>correo</p>
            <p>arnoldcrzdev@gmail.com</p>
          </div>
          <div>
            <p>Telefono/Whatsapp</p>
            <p>+504 3303-8039</p>
          </div>
        </div>
        <div className="wrapper_item_social">
          <h3>Social</h3>
          <div>
            <a href="https://www.facebook.com/codespacehn/">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/codespace_hn/">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </Wrapperfooter>
  );
}

export { Footer };
