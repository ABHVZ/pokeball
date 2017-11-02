import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokemonTypes from './_util_pokemon_types';
//import * as actions from '../actions';
//import ModalForm from '../components/Modals';
import { Form, Button } from 'semantic-ui-react';


class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar">
                {
                    pokemonTypes.map(pokemonType => (
                        <Form.Field label={pokemonType} key={pokemonType} control='input' type='checkbox' />
                    ))
                }
                <Form.Field control='input' placeholder='$min' />
                <Form.Field control='input' placeholder='$max' />
                <Button type='submit'>Submit</Button>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        allPokemon: state.allPokemon
    }
}

export default connect(mapStateToProps)(Sidebar);


// integrate linter:
// use pokeball-test otherwise reseed everytime running test
