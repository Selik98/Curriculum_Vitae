import './css/App.css';
import './css/Home.css';
import './css/Nav.css';
import './css/curriculum.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';
import Curriculum from './components/views/curriculum';
import Home from './components/views/home';
import Repositorios from './components/views/repositorios';
import Contacto from './components/views/contacto';


function App() {
  return (
    <>
      <Nav />
      <Route path= "/" component = {Home} exact/>
      <Route path= "/curriculum" component = {Curriculum} />
      <Route path= "/repositorios" component = {Repositorios} />
      <Route path= "/contacto" component = {Contacto} />
      <Footer/>
    </>
  );
}

export default App;
