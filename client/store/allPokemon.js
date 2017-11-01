import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_POKEMON = 'GET_ALL_POKEMON'

/**
 * INITIAL STATE
 */
const defaultAllPokemon = []

/**
 * ACTION CREATORS
 */
const getAllPokemon = allPokemon => ({ type: GET_ALL_POKEMON, allPokemon })

/**
 * THUNK CREATORS
 */

export const fetchAllPokemon = () => {
    return dispatch =>
        axios.get('/api/allpokemon')
            .then(res => res.data)
            .then(allpokemon => {
                dispatch(getAllPokemon(allpokemon))
            })
            .catch(err => console.log(err));
}
/**
 * REDUCER
 */
export default function (state = defaultAllPokemon, action) {
    switch (action.type) {
        case GET_ALL_POKEMON:
            return action.allPokemon
        default:
            return state
    }
}