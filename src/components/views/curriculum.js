import React from "react";
import Skills from "./fragments/Skills";
import Experiences from "./fragments/Experiences";
import Studies from "./fragments/Studies";


function Curriculum() {
    return (
        <div className="curriculum">
            <div className="titleHolder">
                <h1 className="cvTitle">Curriculum</h1>
            </div>

            <Studies />

            <Experiences />


            <Skills />


        </div>
    );
}

export default Curriculum;