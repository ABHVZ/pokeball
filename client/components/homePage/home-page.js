import React from 'react';
import { connect } from 'react-redux';
import AllPokemon from './all-pokemon.js';
import Sidebar from './sidebar.js';


const HomePage = () => {
    return (
        <div className="home-page-container">
            <Sidebar />
            <AllPokemon />
        </div>
    )

}

export default connect()(HomePage)
