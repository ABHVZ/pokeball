import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import PokemonTypeInfo from './_util_pokemon_types_info';
import PokemonCard from '../homePage/pokemon-card';

const pokemonPerPage = 15;
const getCurrentPagePokemon = (allPokemon, currentPageIndex) => {
    return allPokemon.slice((currentPageIndex - 1) * pokemonPerPage, currentPageIndex * pokemonPerPage)
}
const filterPokemonByPrice = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.total >= min && pokemon.total <= max)
}
const filterPokemonByType = (type, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.type1 === type || pokemon.type2 === type)
}
const filterPokemonByHP = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.hp >= min && pokemon.hp <= max)
}
const filterPokemonByATK = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.atk >= min && pokemon.atk <= max)
}

class TypePokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1
        }
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.setNextPage = this.setNextPage.bind(this);
        this.setPrevPage = this.setPrevPage.bind(this);
    }

    render() {
        const { allPokemon, type, minPriceFilter, maxPriceFilter, minHPFilter, maxHPFilter, minATKFilter, maxATKFilter } = this.props;
        let filteredPokemon = filterPokemonByType(type, allPokemon);
        filteredPokemon = filterPokemonByPrice(minPriceFilter, maxPriceFilter, filteredPokemon);
        filteredPokemon = filterPokemonByHP(minHPFilter, maxHPFilter, filteredPokemon);
        filteredPokemon = filterPokemonByATK(minATKFilter, maxATKFilter, filteredPokemon);

        let pageButtons = [];

        _.range(1, filteredPokemon.length / pokemonPerPage).map(pageIndex => {
            (pageIndex !== this.state.currentPage)
                ? pageButtons.push(<button onClick={this.setCurrentPage}>{pageIndex}</button>)
                : pageButtons.push(<button onClick={this.setCurrentPage} style={{ textDecoration: 'underline' }}>{pageIndex}</button>)
        });

        return (
            <div>
                <div className="page-head">Type {type}</div>
                <div className="page-info">{PokemonTypeInfo[type]}</div>
                <div className="pokemon-cards-container">
                    {filteredPokemon && getCurrentPagePokemon(filteredPokemon, this.state.currentPage).map((pokemon) => (
                        <PokemonCard pokemon={pokemon} key={pokemon.name} />
                    ))}
                </div>
                <div className="pokemon-page-control">
                    <button onClick={this.setPrevPage}>←</button>
                    {pageButtons}
                    <button onClick={this.setNextPage}>→</button>
                </div>
            </div>
        )
    }

    setCurrentPage(event) {
        this.setState({ currentPage: parseInt(event.target.textContent, 10) })
    }

    setNextPage() {
        this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }))
    }

    setPrevPage() {
        this.setState(prevState => ({ currentPage: prevState.currentPage - 1 }))
    }

}

function mapStateToProps(state, ownProps) {
    return {
        allPokemon: state.allPokemon,
        type: ownProps.match.params.type,
        minPriceFilter: state.minPriceFilter,
        maxPriceFilter: state.maxPriceFilter,
        minHPFilter: state.minHPFilter,
        maxHPFilter: state.maxHPFilter,
        minATKFilter: state.minATKFilter,
        maxATKFilter: state.maxATKFilter
    }
}

export default withRouter(connect(mapStateToProps)(TypePokemon));
