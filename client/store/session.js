import axios from 'axios'

/**
 * ACTION TYPES
 */
const POKEMON_ADDED_TO_SESSION = 'GET_SINGLE_POKEMON'

/**
 * INITIAL STATE
 */

/**
 * ACTION CREATORS
 */
const getSinglePokemon = singlePokemon => ({ type: GET_SINGLE_POKEMON, singlePokemon })

/**
 * THUNK CREATORS
 */

export const fetchSinglePokemon = id => {
    return dispatch => 
        axios.get(`/api/pokemon/${id}`)
            .then(res => res.data)
            .then(singlePokemon => {
                dispatch(getSinglePokemon(singlePokemon))
            })
            .catch(err => console.log(err))
}
/**
 * REDUCER
 */
export default function (state = {}, action) {
    switch (action.type) {
        case GET_SINGLE_POKEMON:
            return action.singlePokemon
        default:
            return state
    }
}