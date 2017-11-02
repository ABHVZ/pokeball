import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokemonTypes from './_util_pokemon_types';
import { setMaxPrice, setMinPrice } from '../../store'
import { Form } from 'semantic-ui-react';


class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maxPriceInput: '$min',
            minPriceInput: '$max'
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.setLocalMinPrice = this.setLocalMinPrice.bind(this)
        this.setLocalMaxPrice = this.setLocalMaxPrice.bind(this)
    }

    render() {
        return (
            <div className="sidebar">
                {
                    pokemonTypes.map(pokemonType => (
                        <Form.Field label={pokemonType} key={pokemonType} control="input" type="checkbox" />
                    ))
                }

                <form className="min-max-price-form" onSubmit={this.onSubmit}>
                    <div>Price</div>
                    <input className="price-input" onChange={this.setLocalMinPrice} value={this.state.minPriceInput} />
                    <div>To</div>
                    <input className="price-input" onChange={this.setLocalMaxPrice} value={this.state.maxPriceInput} />
                    <button className="price-submit-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }

    setLocalMinPrice(event) {
        this.setState({ minPriceInput: event.target.value.toString() })
    }

    setLocalMaxPrice(event) {
        this.setState({ maxPriceInput: event.target.value.toString() })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.submitMinMaxPrice(parseInt(this.state.minPriceInput, 10), parseInt(this.state.maxPriceInput, 10))
        this.setState({ minPriceInput: '$min' })
        this.setState({ maxPriceInput: '$max' })
    }


}

const mapStateToProps = (state) => ({
    allPokemon: state.allPokemon,
})

const mapDispatchToProps = (dispatch) => ({
    submitMinMaxPrice(min, max) {
        dispatch(setMinPrice(min));
        dispatch(setMaxPrice(max))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
