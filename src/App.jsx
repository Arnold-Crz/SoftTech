import Footer from './components/footer/Footer';
import Menu from './components/navbar/Menu';
import Contacto from './pages/contacto/Contacto';
import Inicio from './pages/inicio/Inicio';
import Precios from './pages/precios/Precios';
import Servicios from './pages/servicios/Servicios';
import 'boxicons';
import Cookies from './components/cookies/Cookies';

function App() {
  return (
    <>
      <Cookies />
      <Menu />
      <Inicio />
      <Servicios />
      <Precios />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
