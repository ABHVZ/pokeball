import React from 'react';
import { connect } from 'react-redux';
import GenerationPokemon from './generation-pokemon.js';
import Sidebar from '../homePage/sidebar.js';


const GenerationPage = () => {

    return (
        <div className="home-page-container">
            <Sidebar />
            <GenerationPokemon />
        </div>
    )

}

export default connect()(GenerationPage);
