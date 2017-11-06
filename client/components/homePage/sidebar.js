import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { pokemonTypes, pokemonGens } from './_util_pokemon_types';
import { setMaxPrice, setMinPrice, setMinHP, setMaxHP, setMaxATK, setMinATK } from '../../store'


class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maxPriceInput: 'max',
            minPriceInput: 'min',
            maxHPInput: 'max',
            minHPInput: 'min',
            maxATKInput: 'max',
            minATKInput: 'min',
            typesInput: []
        }
        this.onPriceSubmit = this.onPriceSubmit.bind(this)
        this.setLocalMinPrice = this.setLocalMinPrice.bind(this)
        this.setLocalMaxPrice = this.setLocalMaxPrice.bind(this)
        this.onHPSubmit = this.onHPSubmit.bind(this)
        this.setLocalMinHP = this.setLocalMinHP.bind(this)
        this.setLocalMaxHP = this.setLocalMaxHP.bind(this)
        this.onHPSubmit = this.onHPSubmit.bind(this)
        this.setLocalMinHP = this.setLocalMinHP.bind(this)
        this.setLocalMaxHP = this.setLocalMaxHP.bind(this)
        this.onATKSubmit = this.onATKSubmit.bind(this)
        this.setLocalMinATK = this.setLocalMinATK.bind(this)
        this.setLocalMaxATK = this.setLocalMaxATK.bind(this)
    }

    componentWillUnmount() {
        this.props.unmount();
    }

    render() {
        return (
            <div className="sidebar">

                <form className="min-max-form" onSubmit={this.onPriceSubmit}>
                    <div className="category-head">PRICE</div>
                    <div className="min-max-input-container">
                        <input className="min-input" onChange={this.setLocalMinPrice} value={this.state.minPriceInput} />
                        <span>To</span>
                        <input className="max-input" onChange={this.setLocalMaxPrice} value={this.state.maxPriceInput} />
                    </div>
                    <button className="price-submit-button" type="submit">Submit</button>
                </form>

                <form className="min-max-form" onSubmit={this.onHPSubmit}>
                    <div className="category-head">HP</div>
                    <div className="min-max-input-container">
                        <input className="min-input" onChange={this.setLocalMinHP} value={this.state.minHPInput} />
                        <span>To</span>
                        <input className="max-input" onChange={this.setLocalMaxHP} value={this.state.maxHPInput} />
                    </div>
                    <button className="price-submit-button" type="submit">Submit</button>
                </form>

                <form className="min-max-form" onSubmit={this.onATKSubmit}>
                    <div className="category-head">ATK</div>
                    <div className="min-max-input-container">
                        <input className="min-input" onChange={this.setLocalMinATK} value={this.state.minATKInput} />
                        <span>To</span>
                        <input className="max-input" onChange={this.setLocalMaxATK} value={this.state.maxATKInput} />
                    </div>
                    <button className="price-submit-button" type="submit">Submit</button>
                </form>

                <form className="type-form">
                    <div className="category-head">ALL GENERATIONS</div>
                    {
                        pokemonGens.map(pokemonGen => (
                            <Link to={`/pokemon/generation/${pokemonGen}`} className="type-link" key={pokemonGen} >{pokemonGen}</Link>
                        ))
                    }
                </form>

                <form className="type-form">
                    <div className="category-head">ALL TYPES</div>
                    {
                        pokemonTypes.map(pokemonType => (
                            <Link to={`/pokemon/type/${pokemonType}`} className="type-link" key={pokemonType} >{pokemonType}</Link>
                        ))
                    }
                </form>

            </div >
        )
    }

    setLocalMinPrice(event) {
        this.setState({ minPriceInput: event.target.value.toString() })
    }

    setLocalMaxPrice(event) {
        this.setState({ maxPriceInput: event.target.value.toString() })
    }

    setLocalMinHP(event) {
        this.setState({ minHPInput: event.target.value.toString() })
    }

    setLocalMaxHP(event) {
        this.setState({ maxHPInput: event.target.value.toString() })
    }

    setLocalMinATK(event) {
        this.setState({ minATKInput: event.target.value.toString() })
    }

    setLocalMaxATK(event) {
        this.setState({ maxATKInput: event.target.value.toString() })
    }

    onPriceSubmit(event) {
        // still have to implement type control for non Number input
        event.preventDefault();
        this.props.submitMinMaxPrice(parseInt(this.state.minPriceInput, 10), parseInt(this.state.maxPriceInput, 10))
    }

    onHPSubmit(event) {
        event.preventDefault()
        // still have to implement type control for non Number input
        this.props.submitMinMaxHP(parseInt(this.state.minHPInput, 10), parseInt(this.state.maxHPInput, 10))
    }

    onATKSubmit(event) {
        event.preventDefault()
        // still have to implement type control for non Number input
        this.props.submitMinMaxATK(parseInt(this.state.minATKInput, 10), parseInt(this.state.maxATKInput, 10))
    }


}

const mapStateToProps = (state) => ({
    allPokemon: state.allPokemon,
})

const mapDispatchToProps = (dispatch) => ({
    submitMinMaxPrice(min, max) {
        dispatch(setMinPrice(min));
        dispatch(setMaxPrice(max))
    },
    submitMinMaxHP(min, max) {
        dispatch(setMinHP(min));
        dispatch(setMaxHP(max))
    },
    submitMinMaxATK(min, max) {
        dispatch(setMinATK(min));
        dispatch(setMaxATK(max))
    },
    unmount() {
        dispatch(setMinPrice(0));
        dispatch(setMaxPrice(+Infinity));
        dispatch(setMinHP(0));
        dispatch(setMaxHP(+Infinity));
        dispatch(setMinATK(0));
        dispatch(setMaxATK(+Infinity));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
