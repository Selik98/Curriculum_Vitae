import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (

        <nav className="nav">

            <Link to='/' className="link-style" exact = {true} ><h1 className="hola"> Matias Kiesel</h1></Link>
            
            <ul className="list">
                <Link to='/About' className="link-style" exact = {true} ><li>Sobre Mi</li></Link>
                <Link to='/Repositorios' className="link-style" exact = {true} ><li>Repositorios</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;