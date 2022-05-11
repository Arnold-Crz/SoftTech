import Footer from './components/footer/Footer';
import Menu from './components/navbar/Menu';
import Contacto from './pages/contacto/Contacto';
import Inicio from './pages/inicio/Inicio';
import Precios from './pages/precios/Precios';
import Servicios from './pages/servicios/Servicios';

function App() {
  return (
    <>
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
