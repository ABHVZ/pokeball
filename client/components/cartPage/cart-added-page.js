import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store'
import { Container, Grid, Image, Button, Segment, Divider, Header, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const ImageURL = 'https://pre00.deviantart.net/d1d9/th/pre/i/2017/051/5/3/pokemon_egg__standard_2k__by_maniraptavia-daghxb1.png';

class CartAddedPage extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// Fetches all Pokemon from cart into store when user accesses Pokemon single page directly instead of visiting homepage
		if (!this.props.cart) this.props.fetchCartFromSession()
	}

	// Recommendation algorithm in process, not fully implemented yet.
	// Issues: Multiple async requsests; will implement promises to fix at later time
	// Other approach: Use the allPokemon within store and fetch individual Pokemon data instead of making requests
	// generateRecommendations(columns) {
	// 	var collection = [];
	// 	for (var i = 0; i < columns.length; i++) {
	// 		let randomId = Math.round(Math.random() * 800)
	// 		let pokemon = this.props.fetchSinglePokemon(randomId)
	// 		collection.push(
	// 			<Grid.Column>
	// 	            <Link to={`/pokemon/${randomNum}`}>
	// 	            	<Image src={ImageURL} centered size="small" shape='rounded'/>
	// 	            	<Header textAlign='center'>{pokemon.name}</Header>
	// 	        	</Link>
	// 	        </Grid.Column>
	//         )
	// 	}
	// 	return collection
	// }

	render() {
		// Conditionally render once props are received from single page purchase
		console.log('this.state', this.state)
		if (this.props.lastPurchased !== undefined) {
			const { totalPrice, totalQuantity, lastPurchased } = this.props
			return (
				<Container style={{ paddingTop: '3em' }}>
					<Segment>
						<Grid>
							<Grid.Column width={4}>
								<Header as='h3' image>
									<Image src={lastPurchased.image} shape='rounded' size='mini' />
									<Header.Content>
										{lastPurchased.name}
										<Header.Subheader
											size='tiny'
										>Added to Cart
						    	</Header.Subheader>
									</Header.Content>

								</Header>
							</Grid.Column>

							<Grid.Column width={7}>
								<h3 style={{ display: 'inline-block' }}>Cart subtotal ({totalQuantity} items): <span style={{ color: '#E31F64' }}>${totalPrice}</span></h3>
							</Grid.Column>
							<Grid.Column width={5}>
								<Button><Link to='/cart'>Cart</Link></Button>

								{/* 
						USER CHECKOUT
						- When user is logged in; proceed to checkout page
						- When user is NOT logged in; proceed to sign up page and persist cart into database under user
			          */}

								<Button>Proceed to checkout ({totalQuantity} items)</Button>
							</Grid.Column>
						</Grid>
					</Segment>

					<Header>Recommended for you based on Pikachu</Header>

					<Grid columns={3}>
						<Grid.Column>
							<Image src={ImageURL} centered size="small" shape='rounded' />
							<Header textAlign='center'>Pikachu</Header>
						</Grid.Column>
						<Grid.Column>
							<Image src={ImageURL} centered size="small" shape='rounded' />
							<Header textAlign='center'>Pikachu</Header>
						</Grid.Column>
						<Grid.Column>
							<Image src={ImageURL} centered size="small" shape='rounded' />
							<Header textAlign='center'>Pikachu</Header>
						</Grid.Column>
					</Grid>


					<Header>Customers who shopped for Pikachu also shopped for:</Header>

					<Grid columns={3}>
						<Grid.Column>
							<Image src={ImageURL} centered size="small" shape='rounded' />
							<Header textAlign='center'>Pikachu</Header>
						</Grid.Column>
						<Grid.Column>
							<Image src={ImageURL} centered size="small" shape='rounded' />
							<Header textAlign='center'>Pikachu</Header>
						</Grid.Column>
						<Grid.Column>
							<Image src={ImageURL} centered size="small" shape='rounded' />
							<Header textAlign='center'>Pikachu</Header>
						</Grid.Column>
					</Grid>

				</Container>
			)
		}
		else return <div>Loading</div>

	}
}

function mapStateToProps(state) {
	return {
		cart: state.session.cart,
		totalPrice: state.session.totalPrice,
		totalQuantity: state.session.totalQuantity,
		lastPurchased: state.session.lastPurchased
	}
}

export default connect(mapStateToProps, actions)(CartAddedPage);
