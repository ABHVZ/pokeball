import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../store'
import axios from 'axios'
import PokemonReview from './pokemon-review'
// import addPokemonToSession from '../../store/session'
import { Container, Grid, Image, Input, Button, Table, Dropdown } from 'semantic-ui-react';
// const ImageURL = 'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png';

class SinglePage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			dropdownValue: 1
		}
		this.handleDropdown = this.handleDropdown.bind(this)
		this.editPokemonQuantity = this.editPokemonQuantity.bind(this)
	}

	componentDidMount() {
		const { id } = this.props.match.params
		this.props.fetchSinglePokemon(id)
	}

	handleDropdown(e, data) {
		this.setState({ dropdownValue: data.value })
	}

	editPokemonQuantity = (finalQty, singlePokemon) => {
		axios.post(`/api/cart/edit`, { finalQty, singlePokemon })
			.catch(err => console.log(err))
	}

	render() {

		console.log('SinglePage rendered')
		console.log('this.props');
		console.log(this.props.singlePokemon)
		console.log('this.state.dropdownValue', this.state.dropdownValue)
		const { name, atk, def, gen, hp, spAtk, spDef, speed, total, type1, type2, price, image } = this.props.singlePokemon

		// Dropdown menu options
		const options = [
			{ key: 1, text: '1', value: 1 },
			{ key: 2, text: '2', value: 2 },
			{ key: 3, text: '3', value: 3 },
			{ key: 4, text: '4', value: 4 },
			{ key: 5, text: '5', value: 5 },
			{ key: 6, text: '6', value: 6 },
			{ key: 7, text: '7', value: 7 },
			{ key: 8, text: '8', value: 8 },
			{ key: 9, text: '9', value: 9 },
		]

		return (
<<<<<<< HEAD
			<Container style={{ paddingTop: '1em' }}>
				<Grid divided='vertically'>
					<Grid.Row columns={2}>
						<Grid.Column centered>
							<h1>{name}</h1>
							<Image style={{ width: '30%', paddingLeft: '1em' }} src={image} />
						</Grid.Column>
						<Grid.Column>
							<div>
								<h1>Price: ${price}</h1>
								<Dropdown defaultValue={1} onChange={this.handleDropdown} search selection options={options} />

								<Button onClick={() => {
									this.props.addPokemonToSession(this.state.dropdownValue, this.props.singlePokemon) // Accepts quantity and pokemon object
									this.props.history.push('/cart/added') // Redirect user to latest purchase and recommmendations
								}}>Buy now</Button>
							</div>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>

							<Table celled>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Name</Table.HeaderCell>
										<Table.HeaderCell>Type 1</Table.HeaderCell>
										<Table.HeaderCell>Type 2</Table.HeaderCell>
										<Table.HeaderCell>Total</Table.HeaderCell>
										<Table.HeaderCell>Hitpoints</Table.HeaderCell>
										<Table.HeaderCell>Attack</Table.HeaderCell>
										<Table.HeaderCell>Defence</Table.HeaderCell>
										<Table.HeaderCell>Special Attack</Table.HeaderCell>
										<Table.HeaderCell>Special Defence</Table.HeaderCell>
										<Table.HeaderCell>Speed</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.Cell>{name}</Table.Cell>
										<Table.Cell>{type1}</Table.Cell>
										<Table.Cell>{type2}</Table.Cell>
										<Table.Cell>{total}</Table.Cell>
										<Table.Cell>{hp}</Table.Cell>
										<Table.Cell>{atk}</Table.Cell>
										<Table.Cell>{def}</Table.Cell>
										<Table.Cell>{spAtk}</Table.Cell>
										<Table.Cell>{spDef}</Table.Cell>
										<Table.Cell>{speed}</Table.Cell>
									</Table.Row>

								</Table.Body>
							</Table>

						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		singlePokemon: state.singlePokemon
	}
}

export default connect(mapStateToProps, actions)(SinglePage)