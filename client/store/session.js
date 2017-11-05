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

export const addPokemonToSession = (qty, singlePokemon) => {
	return dispatch => {
		axios.post(`/api/cart`, {qty, singlePokemon})
		.then(res => {
			console.log('addPokemonToSession')
			console.log(res.data)
			dispatch({
				type: ADD_TO_CART,
				payload: [res.data]
			})
		})
	}
}

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

/**
 * REDUCER
 */
export default function (state = {}, action) {
    switch (action.type) {
    	case GET_CART:
    		const cart = Object.values(action.payload)
    		return { ...state, cart }
		case ADD_TO_CART:
		console.log("REDUCER - ADD_TO_CART")
		console.log(action.payload)
			return { ...state, 
						cart: {
							...cart

						} 
					}
        default:
            return state
    }
}