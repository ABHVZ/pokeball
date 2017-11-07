// ACTION TYPES

const SET_TYPE = 'SET_TYPE';

// ACTION CREATORS

export function setType(pokemonType) {
    return {
        type: SET_TYPE,
        payload: pokemonType
    };
}
var typeStatus = {
    'Bug': false,
    'Dark': false,
    'Dragon': false,
    'Electric': false,
    'Fairy': false,
    'Fighting': false,
    'Fire': false,
    'Flying': false,
    'Ghost': false,
    'Grass': false,
    'Ground': false,
    'Ice': false,
    'Normal': false,
    'Poison': false,
    'Psychic': false,
    'Rock': false,
    'Steel': false,
    'Water': false
}

// REDUCER
export default function reducer(state = typeStatus, action) {

    switch (action.type) {
        case SET_TYPE:
            return {...state, [action.payload]: !state[action.payload]}
        default:
            return state;
    }

}