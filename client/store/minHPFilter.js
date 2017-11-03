// ACTION TYPES

const SET_MIN_HP = 'SET_MIN_HP';

// ACTION CREATORS

export function setMinHP(hp) {
    return {
        type: SET_MIN_HP,
        hp
    };
}

// REDUCER
export default function reducer(state = 0, action) {

    switch (action.type) {

        case SET_MIN_HP:
            return action.hp;

        default:
            return state;
    }

}
