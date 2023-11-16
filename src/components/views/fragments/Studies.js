import React from "react";
import CvData from "./CvData"

function Studies() {



  return (

    <>
      <div className="holderJob">
        <h2 className="cvText">Estudios</h2>
      </div>

      <div className="exp">
        <CvData
          company="Digital House"
          job='Programación Web Full Stack'
          anios="2023"
          data='Finalizado en 2023 con un enfoque especializado en 
          Node.js y React, sobresaliendo en la creación de aplicaciones web interactivas y modernas'
        />
        <CvData
          company="Instituto Terciario ORT"
          job='Diseño Grafico'
          anios="2017-2020"
          data='Egresado en 2020 con el título de Técnico Superior en 
          Diseño Grafico cuyas notas mas destacables son dentro 
          del área de Computacion Gráfica, Fotografía y Redacción.'
        />
        <CvData
          company="Escuelas Técnicas ORT"
          job='Tecnologia de la Informacion'
          anios="2011-2017"
          data='Egresado en 2017 con el título de Bachiller Tecnico con 
          orientacion en Tecnologia de la Informacion cuyas notas 
          mas destacables son dentro del área de Desarrollo en 
          Sistemas y Produccion Digital.'
        />

      </div>
    </>

  );
}

export default Studies;