import React from "react";
import Data from "./views/fragments/Data"

function Footer() {



    return (

        <footer className="foot">
            <Data
                title='Telefono'
                data='+54 9 11 2401-3261'
            />

            <Data
                title='Mail'
                data='mkiesel98@gmail.com'
            />

            <div>
                <h4 className="sub">Mis cuentas</h4>
                <div className="media">
                    <a href="https://www.linkedin.com/in/matias-kiesel-b6443a117/" className="none"><i className="fab fa-linkedin social" /> </a>
                    <a href="https://github.com/Selik98" className="none"><i className="fab fa-github social" /> </a>
                </div>
            </div>
            <div className="copyright text-center my-auto">
            <span>Copyright &copy;</span>
            <span> Creado por Matias Kiesel</span>
            </div>
        </footer>

    );
}

export default Footer;