import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PokemonCard from './pokemon-card';

const pokemonPerPage = 30;
const getCurrentPagePokemon = (allPokemon, currentPageIndex) => {
    return allPokemon.slice((currentPageIndex - 1) * 30, currentPageIndex * 30)
}
const filterPokemonByPrice = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.total >= min && pokemon.total <= max)
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
        let filteredPokemon = filterPokemonByPrice(this.props.minPriceFilter, this.props.maxPriceFilter, allPokemon);

        let pageButtons = [];

        _.range(1, filteredPokemon.length / pokemonPerPage).map(pageIndex => {
            pageButtons.push(<button onClick={this.setCurrentPage}>{pageIndex}</button>)
        })

        return (
            <div style={{marginLeft: '21%'}}>
                <h1>Shop Pokemon</h1>

                <div className="pokemon-cards-container">
                    {filteredPokemon && getCurrentPagePokemon(filteredPokemon, this.state.currentPage).map((pokemon) => (
                        <PokemonCard pokemon={pokemon} key={pokemon.name} />
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
        allPokemon: state.allPokemon,
        minPriceFilter: state.minPriceFilter,
        maxPriceFilter: state.maxPriceFilter
    }
}

export default connect(mapStateToProps)(AllPokemon);