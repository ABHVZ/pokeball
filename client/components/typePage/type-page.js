import React from 'react';
import { connect } from 'react-redux';
import TypePokemon from './type-pokemon.js';
import Sidebar from '../homePage/sidebar.js';


const TypePage = () => {

    return (
        <div className="home-page-container">
            <Sidebar />
            <TypePokemon />
        </div>
    )

}

export default connect()(TypePage);
