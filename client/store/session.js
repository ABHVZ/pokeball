import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const EDIT_CART = 'EDIT_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

/**
 * INITIAL STATE
 */
// const defaultAllPokemon = []

/**
 * ACTION CREATORS
 */
// const getAllPokemon = allPokemon => ({ type: GET_ALL_POKEMON, allPokemon })

/**
 * THUNK CREATORS
 */

export const fetchCartFromSession = () => {
	return dispatch => {
		axios.get(`/api/cart`)
			.then(res => {
				dispatch({
					type: GET_CART,
					payload: res.data
				})
			})
	}
}

export const addPokemonToSession = (qty, pokemon) => {
	return dispatch => {
		axios.post(`/api/cart`, { qty, pokemon })
			.then(res => {
				console.log('addPokemonToSession')
				console.log(res.data)
				dispatch({
					type: ADD_TO_CART,
					payload: res.data
				})
			})
	}
}

export const editPokemonInSession = (qty, id) => {
	return dispatch => {
		axios.put(`/api/cart`, { qty, id })
			.then(res => {
				dispatch({
					type: EDIT_CART,
					payload: res.data
				})
			})
	}
}

export const deletePokemonInSession = (id) => {
	console.log("action - deleting")
	return dispatch => {
		axios.delete(`/api/cart/${id}`)
			.then(res => {
				dispatch({
					type: DELETE_FROM_CART,
					payload: res.data
				})
			})
	}
}

/**
 * REDUCER
 */
export default function (state = {}, action) {
	switch (action.type) {
		case GET_CART:
			return { ...state, cart: action.payload, totalPrice: getTotalPrice(action.payload), totalQuantity: getTotalQuantity(action.payload) }
		case ADD_TO_CART:
			const { id } = action.payload.pokemon
			let cart = { ...state.cart, [id]: action.payload }
			return { ...state, cart, totalPrice: getTotalPrice(cart), totalQuantity: getTotalQuantity(cart), lastPurchased: action.payload.pokemon }
		case EDIT_CART:
			return { ...state, cart: action.payload, totalPrice: getTotalPrice(action.payload), totalQuantity: getTotalQuantity(action.payload) }
		case DELETE_FROM_CART:
			return { ...state, cart: action.payload, totalPrice: getTotalPrice(action.payload), totalQuantity: getTotalQuantity(action.payload) }
		default:
			return state
	}
}

function getTotalPrice(cart) {
	return Object.values(cart).reduce(function (acc, curr) { return acc + curr.pokemon.price * curr.qty }, 0)
}
function getTotalQuantity(cart) {
	return Object.values(cart).reduce(function (acc, cur) { return acc + 1 * cur.qty }, 0)
}