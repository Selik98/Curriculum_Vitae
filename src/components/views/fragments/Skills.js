import React from "react";
import CvData from "./CvData"
import Skilled from "./Skilled";

function Skills() {

  const skillsArray = [
    'ReactJS',
    'NodeJS',
    'HTML5',
    'CSS3',
    'MySQL',
    'Liderazgo',
    'Trabajo en equipo',
    'Organización',
    'Metodologias Agiles (Scrum)'
  ];

  return (
    <>
      <div className="holderJob">
        <h2 className="cvText">Skills</h2>
      </div>


      <div className="skillSep">

        {skillsArray.map((skill, index) => (
          <Skilled key={index} skill={skill} />
        ))}
      </div>

    </>
  );
}

export default Skills;