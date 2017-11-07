import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokemonTypes from './_util_pokemon_types';
import { setMaxPrice, setMinPrice, setType } from '../../store'
import { Checkbox, Grid, Button, Segment, Divider, List, Dropdown, Form, Input } from 'semantic-ui-react';



class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maxPriceInput: 'max',
            minPriceInput: 'min',
            typeCheckedStatus: {

            }
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.setLocalMinPrice = this.setLocalMinPrice.bind(this)
        this.setLocalMaxPrice = this.setLocalMaxPrice.bind(this)
    }

    componentDidMount() {
        this.createInitialTypeStatus()
    }

    createInitialTypeStatus() {
        let typeCheckedStatus = {};
        pokemonTypes.forEach(function(type) {
            typeCheckedStatus[type] = false
        })
        this.setState({ typeCheckedStatus })
    }

    renderCheckBox() {
        return pokemonTypes.map(pokemonType => (
            <Checkbox style={{display: 'block', paddingBottom: '0.5em'}} label={pokemonType} key={pokemonType} control="input" type="checkbox"/>
        ))
    }

    render() {
        console.log('this.state', this.state)
        console.log('this.props', this.props)

        return (
            <Segment compact style={{marginTop: '1em'}}>
                {this.renderCheckBox()}
                <Form className="min-max-price-form" onSubmit={this.onSubmit}>
                    <div>Price</div>
                    <Input style={{width: '5em'}} size='tiny' className="price-input" onChange={this.setLocalMinPrice} placeholder='min' value={this.state.minPriceInput} />
                    <div>To</div>
                    <Input style={{width: '5em'}} size='tiny' className="price-input" onChange={this.setLocalMaxPrice} placeholder='max' value={this.state.maxPriceInput} />
                    <Button style={{display: 'block'}} type="submit">Submit</Button>
                </Form>
            </Segment>
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
