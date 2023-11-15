import React from "react";
import { Link } from "react-router-dom";
import logo from "./views/resources/imgvector.png"
import Burger from "./views/fragments/Burger";

function Nav() {


    
    return (

        <nav className="nav">
            <Burger/>
            <Link to='/' className="link-style" exact = {true}>
                <img src={logo} className="logo"/>
                <h1 className="headTitle"> Matias Kiesel</h1></Link>
            <div className="sep">
            <ul className="list">
                <Link to='/About' className="link-style" exact = {true} ><li>Sobre Mi</li></Link>
                <Link to='/Repositorios' className="link-style" exact = {true} ><li>Repositorios</li></Link>
                <Link to='/Contacto' className="link-style" exact = {true} ><li>Contacto</li></Link>
            </ul>
                <a href={"./Cv Kiesel Matias.pdf"} download={''} id="downloadCv">Descarga mi CV</a>
            </div>
        </nav>

    );
}

export default Nav;