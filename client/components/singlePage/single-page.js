import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Image, Icon } from 'semantic-ui-react';
import SimilarPokemon from './similar-pokemon';
import PokemonReview from './pokemon-review';
import ReviewRating from './review-rating';
import { postToCart } from '../../store'


const breedTypes = ['wild', 'bred on farm', 'artificially inseminated', 'genetically engineered'];
const lookTypes = ['normal', 'pretty', 'attractive', 'stunning']
const levelIndex = [1, 2, 3, 4, 5];
const quantityIndex = [1, 2, 3];

const getPrice = (price, breed, look, level, quantity) => {
	return (price + breed * 100 + look * 60 + level * 40) * quantity;
}

class SinglePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBreed: 0,
			currentLook: 0,
			currentLevel: 0,
			currentQuantity: 1
		}
		this.setCurrentBreed = this.setCurrentBreed.bind(this);
		this.setCurrentLook = this.setCurrentLook.bind(this);
		this.setCurrentLevel = this.setCurrentLevel.bind(this);
		this.setCurrentQuantity = this.setCurrentQuantity.bind(this);
		this.onAddToCart = this.onAddToCart.bind(this);
	}

	render() {

		const { onePokemon } = this.props;
		const { currentBreed, currentLevel, currentLook, currentQuantity } = this.state;

		let breedButtons = [];
		let lookButtons = [];
		let levelButtons = [];
		let quantityButtons = [];


		breedTypes.map((breedType, idx) => {
			(idx !== currentBreed)
				? breedButtons.push(<button onClick={this.setCurrentBreed}>{breedType}</button>)
				: breedButtons.push(<button onClick={this.setCurrentBreed} style={{ backgroundColor: 'black', color: 'white' }}>{breedType}</button>)
		});

		lookTypes.map((lookType, idx) => {
			(idx !== currentLook)
				? lookButtons.push(<button onClick={this.setCurrentLook}>{lookType}</button>)
				: lookButtons.push(<button onClick={this.setCurrentLook} style={{ backgroundColor: 'black', color: 'white' }}>{lookType}</button>)
		});

		levelIndex.map((level, idx) => {
			(idx !== currentLevel)
				? levelButtons.push(<button onClick={this.setCurrentLevel}>{level}</button>)
				: levelButtons.push(<button onClick={this.setCurrentLevel} style={{ backgroundColor: 'black', color: 'white' }}>{level}</button>)
		});

		quantityIndex.map((quantity, idx) => {
			(idx + 1 !== currentQuantity)
				? quantityButtons.push(<button onClick={this.setCurrentQuantity}>{quantity}</button>)
				: quantityButtons.push(<button onClick={this.setCurrentQuantity} style={{ backgroundColor: 'black', color: 'white' }}>{quantity}</button>)
		});

		return (
			<div>
				<div className="singlePokemon-container">
					<div className="singlePokemon-image-container">
						<div className="pokemon-image">
							{onePokemon && <Image src={onePokemon.image} />}
							<ReviewRating currentPokemon={onePokemon} />
						</div>
					</div>
					<div className="singlePokemon-info-container">
						<div>
							{onePokemon &&
								<div className="pokemon-price">
									{getPrice(onePokemon.price, currentBreed, currentLook, currentLevel, currentQuantity)} USD
						</div>}
						</div>
						<div className="title-container">
							{onePokemon &&
								<div className="pokemon-info-title">
									<div>{onePokemon.name}</div>
									<div>{onePokemon.type1}</div>
									<div>{onePokemon.type2}</div>
								</div>
							}
						</div>
						<div className="pokemon-stats">
							{onePokemon && Object.entries(onePokemon).slice(7, 12).map(entry => (
								<div key={entry[0]}>{`${entry[0]}: ${entry[1]}`}</div>
							))}
						</div>
						<div className="select-container">
							<div><Icon name="configure" /> Select breed</div>
							{breedButtons}
						</div>
						<div className="select-container">
							<div><Icon name="unhide" /> Select look</div>
							{lookButtons}
						</div>
						<div className="select-container">
							<div><Icon name="line chart" /> Select level</div>
							{levelButtons}
						</div>
						<div className="select-container">
							<div><Icon name="cart" /> Select quantity</div>
							{quantityButtons}
						</div>
						<div className="select-container">
							<button id="add-to-bag" onClick={this.onAddToCart}>
								<Icon name="shopping bag" id="add-bag-icon" />
								ADD TO BAG
						    </button>
						</div>
						<div id="shipping-info">
							<Icon name="lightning" />
							Free express shipping and returns on orders above $300
					</div>
					</div>
				</div >
				<SimilarPokemon currentPokemon={onePokemon} />
				<PokemonReview currentPokemon={onePokemon} />
			</div>
		)
	}

	setCurrentBreed(event) {
		if (event.target.textContent === breedTypes[0]) {
			this.setState({ currentBreed: 0 });
		} else if (event.target.textContent === breedTypes[1]) {
			this.setState({ currentBreed: 1 });
		} else if (event.target.textContent === breedTypes[2]) {
			this.setState({ currentBreed: 2 });
		} else if (event.target.textContent === breedTypes[3]) {
			this.setState({ currentBreed: 3 });
		}
	}

	setCurrentLook(event) {
		if (event.target.textContent === lookTypes[0]) {
			this.setState({ currentLook: 0 });
		} else if (event.target.textContent === lookTypes[1]) {
			this.setState({ currentLook: 1 });
		} else if (event.target.textContent === lookTypes[2]) {
			this.setState({ currentLook: 2 });
		} else if (event.target.textContent === lookTypes[3]) {
			this.setState({ currentLook: 3 });
		}
	}

	setCurrentLevel(event) {
		if (event.target.textContent === '1') {
			this.setState({ currentLevel: 0 });
		} else if (event.target.textContent === '2') {
			this.setState({ currentLevel: 1 });
		} else if (event.target.textContent === '3') {
			this.setState({ currentLevel: 2 });
		} else if (event.target.textContent === '4') {
			this.setState({ currentLevel: 3 });
		} else if (event.target.textContent === '5') {
			this.setState({ currentLevel: 4 });
		}
	}

	setCurrentQuantity(event) {
		if (event.target.textContent === '1') {
			this.setState({ currentQuantity: 1 });
		} else if (event.target.textContent === '2') {
			this.setState({ currentQuantity: 2 });
		} else if (event.target.textContent === '3') {
			this.setState({ currentQuantity: 3 });
		}
	}

	onAddToCart() {
		let item = {};
		item.pokemon = this.props.onePokemon;
		item.breed = breedTypes[this.state.currentBreed];
		item.look = lookTypes[this.state.currentLook];
		item.level = levelIndex[this.state.currentLevel];
		item.quantity = quantityIndex[this.state.currentQuantity - 1];
		item.price = getPrice(item.pokemon.price, this.state.currentBreed, this.state.currentLook, this.state.currentLevel, this.state.currentQuantity) / this.state.currentQuantity
		this.props.addToCart(item)
	}

}

function mapStateToProps(state, ownProps) {
	return {
		onePokemon: state.allPokemon && state.allPokemon.find(pokemon => {
			if (pokemon.id === parseInt(ownProps.match.params.pokemonId, 10)) {
				return pokemon
			}
		}),
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => ({
	addToCart(item) {
		dispatch(postToCart(item));
	}
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePage));
