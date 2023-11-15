import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Button(props) {
  let redirect
  switch (props.title) {
    case 'Sobre Mi':
      redirect = '/about'
      break
    case 'Repositorios':
      redirect = '/repositorios'
      break
    case 'Contacto':
      redirect = '/contacto'
      break
      default:
      redirect = '/'
  }

  return (
    <div>
      <Link to={redirect} className='none'><button className="redirect">{props.title}</button></Link>
    </div>
  );
}

export default Button;