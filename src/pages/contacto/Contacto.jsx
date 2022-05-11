import Title from '../../components/Title';

//SVG
import Email from '../../assets/email.svg';
import Tel from '../../assets/phone.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Whatsapp from '../../assets/whatsapp.svg';

import { WrapperSection } from './styles';
import Form from '../../components/form/Form';

function Contacto() {
  return (
    <WrapperSection id="contacto">
      <Title title="C" subtitle="ontacto" />
      <div className="WrapperContent">
        <div className="Wrapper_C">
          <div>
            <h2>Contactos</h2>
            <div>
              <div>
                <img src={Email} alt="Email" />
                <p>codespacehn@gmail.com</p>
              </div>
              <div>
                <img src={Tel} alt="Email" />
                <p>+504 33038039</p>
              </div>
              <div>
                <img src={Facebook} alt="Email" />
                <p>@codespacehn</p>
              </div>
              <div>
                <img src={Instagram} alt="Email" />
                <p>@codespace_hn</p>
              </div>
              <div>
                <img src={Whatsapp} alt="Email" />
                <p>+504 33028039</p>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </WrapperSection>
  );
}

export default Contacto;
