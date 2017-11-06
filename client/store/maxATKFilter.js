// ACTION TYPES

const SET_MAX_ATK = 'SET_MAX_ATK';

// ACTION CREATORS

export function setMaxATK(atk) {
    return {
        type: SET_MAX_ATK,
        atk
    };
}

// REDUCER
export default function reducer(state = +Infinity, action) {

    switch (action.type) {

        case SET_MAX_ATK:
            return action.atk;

        default:
            return state;
    }

}
