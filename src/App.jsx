import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

import Menu from './components/navbar/Menu';
import Contacto from './pages/contacto/Contacto';
import Inicio from './pages/inicio/Inicio';
import Precios from './pages/precios/Precios';
import Servicios from './pages/servicios/Servicios';
import AvisoCookies from './components/cookies/AvisoCookies';
import Cookies from './components/cookies/Cookies';

import 'boxicons';

function App() {
  const ELEMENTS = [
    <Cookies />,
    <Menu />,
    <Inicio />,
    <Servicios />,
    <Precios />,
    <Contacto />,
    <Footer />,
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={ELEMENTS} />
        <Route path="aviso-cookies" element={<AvisoCookies />} />
      </Routes>
    </>
  );
}

export default App;
