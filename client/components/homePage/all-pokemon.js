import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as actions from '../actions';
//import ModalForm from '../components/Modals';
import PokemonCard from './pokemon-card';
import { Grid, Card } from 'semantic-ui-react';


class AllPokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1
        }
        this.setCurrentPage = this.setCurrentPage.bind(this);
    }

    render() {
        const { allPokemon } = this.props;
        let pageButtons = [];
        for (let i = 1; i < allPokemon.length / 30; i++) {
            pageButtons.push(<button onClick={this.setCurrentPage}>{i}</button>)
        }
        return (
            <div>
                <h1>Shop Pokemon</h1>

                <div className="pokemon-cards-container">
                    {allPokemon && allPokemon.slice((this.state.currentPage - 1) * 30, this.state.currentPage * 30).map(pokemon =>
                        (<PokemonCard
                            pokemon={pokemon}
                        />)
                    )}
                </div>

                <div className="pokemon-page-control">
                    {pageButtons}
                </div>
            </div>
        )
    }

    setCurrentPage(event) {
        this.setState({ currentPage: event.target.textContent })
    }

}

function mapStateToProps(state) {
    return {
        allPokemon: state.allPokemon
    }
}

export default connect(mapStateToProps)(AllPokemon);