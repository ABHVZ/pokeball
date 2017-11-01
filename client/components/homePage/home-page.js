import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllPokemon from './all-pokemon.js';
//import { Sidebar } from '../index.js';


class HomePage extends Component {


    render() {
        return (
            <div>
                <AllPokemon />
            </div>
        )

    }
}

export default connect()(HomePage)