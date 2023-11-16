import React from "react";
import PersonalCard from "./fragments/PersonalCard";
import  Button  from "./fragments/Button";

function Home() {
    return (

        <div className="base">
            
            <PersonalCard/>
            <div className="buttons">
            <Button
            title = 'Curriculum'
            />
                        <Button
            title = 'Repositorios'
            />
                        <Button
            title = 'Contacto'
            />
            </div>
        </div>

    );
}

export default Home;