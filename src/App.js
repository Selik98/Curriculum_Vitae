import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/nav';
import About from './components/views/about';
import Repositorios from './components/views/repositorios';


function App() {
  return (
    <>
      <Nav />
      <Route path= "/about" component = {About} />
      <Route path= "/repositorios" component = {Repositorios} />

    </>
  );
}

export default App;
