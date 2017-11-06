import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PokemonCard from './pokemon-card';

const pokemonPerPage = 35;
const getCurrentPagePokemon = (allPokemon, currentPageIndex) => {
    return allPokemon.slice((currentPageIndex - 1) * pokemonPerPage, currentPageIndex * pokemonPerPage)
}
const filterPokemonByPrice = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.price >= min && pokemon.price <= max)
}
const filterPokemonByHP = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.hp >= min && pokemon.hp <= max)
}
const filterPokemonByATK = (min, max, allpokemon) => {
    return allpokemon.filter(pokemon => pokemon.atk >= min && pokemon.atk <= max)
}


class AllPokemon extends Component {
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
        const { allPokemon } = this.props;
        let filteredPokemon = filterPokemonByPrice(this.props.minPriceFilter, this.props.maxPriceFilter, allPokemon);
        filteredPokemon = filterPokemonByHP(this.props.minHPFilter, this.props.maxHPFilter, filteredPokemon);
        filteredPokemon = filterPokemonByATK(this.props.minATKFilter, this.props.maxATKFilter, filteredPokemon);

        let pageButtons = [];

        _.range(1, filteredPokemon.length / pokemonPerPage).map(pageIndex => {
            (pageIndex !== this.state.currentPage)
                ? pageButtons.push(<button onClick={this.setCurrentPage}>{pageIndex}</button>)
                : pageButtons.push(<button onClick={this.setCurrentPage} style={{ textDecoration: 'underline' }}>{pageIndex}</button>)
        })

        return (
            <div>
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

const mapStateToProps = (state) => {
    return {
        allPokemon: state.allPokemon,
        minPriceFilter: state.minPriceFilter,
        maxPriceFilter: state.maxPriceFilter,
        minHPFilter: state.minHPFilter,
        maxHPFilter: state.maxHPFilter,
        minATKFilter: state.minATKFilter,
        maxATKFilter: state.maxATKFilter
    }
}

export default connect(mapStateToProps)(AllPokemon);
