import React from "react";
import CvData from "./CvData";

function Experiences() {
  return (
    <>
      <div className="holderJob">
        <h2 className="cvText">Experiencias</h2>
      </div>

      <div className="exp">
        <CvData
          company="Cabify"
          job="Chofer"
          anios="2021-Actualidad"
          data="Compañia dedicada al traslado de pasajeros cuyas responsabilidades son: conduccion, Trato con el publico."
        />
        <CvData
          company="La Favorita 649"
          job="Manejo de Redes Sociales"
          anios="2018-2019"
          data="Manejo de Redes Sociales y Paquetería en Comercio dedicado a la venta de herramientas."
        />
        <CvData
          company="DULCE HOGAR BH"
          job="Vendedor / Atención Online"
          anios="2017-2018"
          data="Control de inventario y deposito, atención 
          al cliente, Tramites de logística, diseño de publicidad, ventas 
          por internet y al público, administración de redes sociales."
        />
      </div>
    </>
  );
}

export default Experiences;
