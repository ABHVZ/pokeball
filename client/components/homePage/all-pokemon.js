import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PokemonCard from './pokemon-card';
import { Grid, Card } from 'semantic-ui-react';

const pokemonPerPage = 30;
const getCurrentPagePokemon = (allPokemon, currentPageIndex) => {
    return allPokemon.slice((currentPageIndex - 1) * 30, currentPageIndex * 30)
}

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

        _.range(1, allPokemon.length / pokemonPerPage).map(pageIndex => {
            pageButtons.push(<button onClick={this.setCurrentPage}>{pageIndex}</button>)
        })

        return (
            <div>
                <h1>Shop Pokemon</h1>

                <div className="pokemon-cards-container">
                    {allPokemon && getCurrentPagePokemon(allPokemon, this.state.currentPage).map(pokemon => (
                        <PokemonCard pokemon={pokemon} />
                    ))}
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