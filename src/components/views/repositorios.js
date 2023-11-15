import React from "react";

import BasicCard from "./fragments/BasicCard";
import meve from "./resources/meve.png"
import pokedex from "./resources/pokedex.png"
import dpleasures from "./resources/d-pleasures.png"

function Repositorios() {
    return (

        <div className="base">
            <h1 className="bodyTitle">Repositorios</h1>
            <section>
            <BasicCard
            adressGithub = 'https://github.com/Selik98/Pokedex'
            adressWebsite = 'https://pokedex-hb0l.onrender.com/'
            description = 'Pokedex Hecha en FrontEnd mediante API'
            name = 'Pokedex'
            img = {pokedex}
            />
            <BasicCard
            adressGithub = 'https://github.com/Selik98/grupo_9_SexShop'
            adressWebsite = 'En Mantenimiento'
            description = 'Digital Pleasure Es una tienda para adultos donde se ofrecen productos sexuales.'
            name= 'Digital Pleasures'
            img = {dpleasures}
            />
            <BasicCard
            adressGithub = 'https://github.com/Selik98/MeVe-Mati.K'
            adressWebsite = 'https://me-verde.onrender.com'
            description = 'Mercado Verde Es una tienda clon basada en MercadoLibre.'
            name = 'Mercado Verde'
            img = {meve}
            />
            <BasicCard
            adressGithub = 'https://github.com/Selik98/FormulaE'
            adressWebsite = 'https://github.com/Selik98/MeVe-Mati.K'
            name= 'Formula E'
            img = '../resources/formulae.png'
            />

            </section>
        </div>

    );
}

export default Repositorios;