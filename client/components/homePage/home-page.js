import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPokemon from './all-pokemon.js';
import Sidebar from './sidebar.js';


class HomePage extends Component {


    render() {
        return (
            <div className="home-page-container">
                <Sidebar />
                <AllPokemon />
            </div>
        )

    }
}

export default connect()(HomePage)