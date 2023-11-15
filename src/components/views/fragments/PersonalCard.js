import React from "react";
import foto from "../resources/DSC_7109.jpg"

function PersonalCard() {



  return (
    <div className='mycard'>
      <img src={foto} className="myself" />
      <div className="base homeRes">
        <h1 className="homeTitle">Hola</h1>
        <h2 className="subtitle">Un poco de mi</h2>
        <p className="text">Soy un entusiasta del desarrollo web con formación en Tecnología de la Información. Especializado en Node.js y React, mi meta es crecer profesionalmente en un entorno innovador. Busco contribuir a proyectos emocionantes y aprender continuamente, aportando al éxito del equipo.</p>
      </div>
    </div>
  );
}

export default PersonalCard;