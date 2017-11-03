// ACTION TYPES

const SET_MIN_ATK = 'SET_MIN_ATK';

// ACTION CREATORS

export function setMinATK(atk) {
    return {
        type: SET_MIN_ATK,
        atk
    };
}

// REDUCER
export default function reducer(state = 0, action) {

    switch (action.type) {

        case SET_MIN_ATK:
            return action.atk;

        default:
            return state;
    }

}
